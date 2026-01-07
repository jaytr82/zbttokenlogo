# ZIMBEAT - Supabase Integration Guide

## Overview

This document explains how to set up Supabase for the ZIMBEAT token platform.

## Prerequisites

1. A Supabase account (free tier is sufficient for development)
2. Node.js/Bun installed
3. Your Supabase project URL and Anon Key

## Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose organization and project name (e.g., "zimbeat")
4. Set database password (save it securely)
5. Wait for project to be ready (~2 minutes)

### 2. Get Your Credentials

1. Go to Project Settings → API
2. Copy:
   - Project URL
   - anon/public key

### 3. Set Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials.

### 4. Create Database Schema

1. Go to Supabase Dashboard → SQL Editor
2. Create a new query
3. Copy the contents of `supabase/schema.sql`
4. Run the query

This will create all necessary tables:
- `profiles` - User profiles and balances
- `artists` - Artist information
- `tracks` - Music tracks
- `quizzes` - Quiz definitions
- `quiz_attempts` - User quiz attempts
- `listens` - Track listening history
- `transactions` - Transaction records
- `referrals` - Referral tracking

### 5. (Optional) Enable Row Level Security (RLS)

The schema includes RLS policies. To enable them:

1. Go to Authentication → Providers
2. Enable Email/Phone provider
3. For Telegram integration, you'll need a custom JWT setup

For development with Telegram (without Auth), the policies allow public access with certain restrictions.

## API Endpoints

### User Management

#### Get User Profile
```http
GET /api/user?telegram_id={telegram_id}
```

#### Create New User
```http
POST /api/user
Content-Type: application/json

{
  "telegram_id": "123456789",
  "username": "johndoe",
  "referral_code": "ZBTABC123" // Optional
}
```

#### Update User Profile
```http
PUT /api/user
Content-Type: application/json

{
  "telegram_id": "123456789",
  "username": "johndoe_updated"
}
```

### Quiz Operations

#### Get Active Quizzes
```http
GET /api/quiz
GET /api/quiz?track_id={track_id}
```

#### Submit Quiz Attempt
```http
POST /api/quiz
Content-Type: application/json

{
  "telegram_id": "123456789",
  "quiz_id": "uuid-of-quiz",
  "answers": ["A", "B", "C", "A"],
  "correct_count": 3,
  "total_questions": 4
}
```

### Transactions

#### Get User Transactions
```http
GET /api/transactions?telegram_id={telegram_id}
```

#### Create Transaction (Spend ZBT)
```http
POST /api/transactions
Content-Type: application/json

{
  "telegram_id": "123456789",
  "amount": 50,
  "type": "spend",
  "description": "Premium quiz mode"
}
```

### Leaderboard

#### Get Leaderboard
```http
GET /api/leaderboard?type=users&limit=10
GET /api/leaderboard?type=artists&limit=10
```

## Database Schema

### Tables

#### profiles
- `id` (UUID) - Primary key
- `telegram_id` (TEXT) - Unique Telegram user ID
- `username` (TEXT) - Display name
- `total_points` (INTEGER) - Total points earned
- `zbt_balance` (INTEGER) - ZBT token balance
- `daily_earned` (INTEGER) - Points earned today
- `last_earned_date` (DATE) - Last date user earned points
- `referral_code` (TEXT) - Unique referral code
- `referred_by` (UUID) - Referrer profile ID

#### artists
- `id` (UUID) - Primary key
- `name` (TEXT) - Artist name
- `telegram_id` (TEXT) - Unique Telegram ID
- `total_listens` (INTEGER) - Total track listens
- `total_earned` (INTEGER) - Total ZBT earned
- `zbt_balance` (INTEGER) - ZBT balance
- `verified` (BOOLEAN) - Verification status

#### tracks
- `id` (UUID) - Primary key
- `artist_id` (UUID) - Reference to artists
- `title` (TEXT) - Track title
- `audio_url` (TEXT) - Audio file URL
- `total_listens` (INTEGER) - Total listens
- `quiz_usage_count` (INTEGER) - Times used in quizzes
- `zbt_earned` (INTEGER) - Total ZBT earned

#### quizzes
- `id` (UUID) - Primary key
- `track_id` (UUID) - Reference to tracks
- `title` (TEXT) - Quiz title
- `questions` (JSONB) - Quiz questions and answers
- `total_plays` (INTEGER) - Total quiz completions
- `zbt_distributed` (INTEGER) - Total ZBT rewarded
- `active` (BOOLEAN) - Quiz status

#### quiz_attempts
- `id` (UUID) - Primary key
- `quiz_id` (UUID) - Reference to quizzes
- `user_id` (UUID) - Reference to profiles
- `score` (INTEGER) - Quiz score (0-100)
- `correct_answers` (INTEGER) - Number of correct answers
- `total_questions` (INTEGER) - Total questions
- `zbt_earned` (INTEGER) - ZBT earned from quiz
- `completed_at` (TIMESTAMP) - Completion timestamp

#### listens
- `id` (UUID) - Primary key
- `user_id` (UUID) - Reference to profiles
- `track_id` (UUID) - Reference to tracks
- `duration_seconds` (INTEGER) - Listen duration
- `completed` (BOOLEAN) - Full track completion
- `zbt_earned` (INTEGER) - ZBT earned
- `created_at` (TIMESTAMP) - Listen timestamp

#### transactions
- `id` (UUID) - Primary key
- `user_id` (UUID) - Reference to profiles
- `type` (TEXT) - Transaction type: 'earn', 'spend', 'transfer'
- `amount` (INTEGER) - Transaction amount
- `description` (TEXT) - Transaction description
- `created_at` (TIMESTAMP) - Transaction timestamp
- `related_id` (UUID) - Related entity ID

#### referrals
- `id` (UUID) - Primary key
- `referrer_id` (UUID) - User who referred
- `referred_id` (UUID) - User who was referred
- `completed` (BOOLEAN) - Referral completion status
- `bonus_paid` (BOOLEAN) - Bonus payment status

## Features

### Daily Earning Cap
- Users can earn maximum 20 ZBT per day
- Resets at midnight UTC
- Prevents token farming

### Referral System
- Each user gets unique referral code
- Referral bonuses tracked separately
- One-time bonus when referred user completes first quiz

### Transaction History
- Complete audit trail of all ZBT movements
- Track earnings, spends, and transfers
- 50 most recent transactions available via API

### Leaderboard
- Top users by ZBT balance
- Top artists by total listens
- Configurable limit

## Security

### Row Level Security (RLS)
- Enabled on all tables
- Policies control read/write access
- Users can only modify their own data
- Public read access for non-sensitive data

### Anti-Abuse Measures
- Daily earning limits
- Telegram ID binding (one account per user)
- Transaction validation
- Balance checks before spending

## Development Workflow

### Local Development
```bash
# Start development server
bun run dev
```

### Testing API
```bash
# Create user
curl -X POST http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -d '{"telegram_id": "123", "username": "test"}'

# Get user
curl http://localhost:3000/api/user?telegram_id=123

# Submit quiz
curl -X POST http://localhost:3000/api/quiz \
  -H "Content-Type: application/json" \
  -d '{
    "telegram_id": "123",
    "quiz_id": "quiz-uuid",
    "answers": ["A", "B", "C"],
    "correct_count": 2,
    "total_questions": 3
  }'
```

## Deployment

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Ensure Supabase project is in production mode
3. Run database migrations in Supabase Dashboard
4. Deploy your Next.js application

## Support

For issues or questions:
- Check Supabase Dashboard logs
- Review API error responses
- Verify environment variables are set correctly
- Ensure database schema is properly created

## Next Steps

After setting up Supabase:
1. Implement Telegram bot integration
2. Create quiz management UI
3. Build artist verification system
4. Add premium content marketplace
5. Implement analytics dashboard
