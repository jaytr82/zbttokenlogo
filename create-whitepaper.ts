import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, HeadingLevel, LevelFormat, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak, PageNumber, Header, Footer } from 'docx';
import fs from 'fs';

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 24 } }
    },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal',
        run: { size: 56, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 120, after: 120 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: 'bullet-list',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: 'ZIMBEAT Token Whitepaper', size: 20, color: '666666' })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun('Page '), new TextRun({ children: [PageNumber.CURRENT] }), new TextRun(' of '), new TextRun({ children: [PageNumber.TOTAL_PAGES] })]
      })] })
    },
    children: [
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun('ZIMBEAT')] }),
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun('Token Whitepaper')] }),
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun('$ZBT - TON Blockchain')] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'A Usage-Driven Utility Token for Music Engagement', size: 28, color: '666666' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Version 1.0', size: 24, color: '666666' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'January 2025', size: 24, color: '666666' })] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('Table of Contents')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('1. Executive Summary')] }),
      new Paragraph({ children: [new TextRun('2. Overview')] }),
      new Paragraph({ children: [new TextRun('   2.1 What is ZIMBEAT?')] }),
      new Paragraph({ children: [new TextRun('   2.2 Why Zimbabwe?')] }),
      new Paragraph({ children: [new TextRun('   2.3 Why TON Blockchain?')] }),
      new Paragraph({ children: [new TextRun('3. Core Philosophy')] }),
      new Paragraph({ children: [new TextRun('4. Token Economics')] }),
      new Paragraph({ children: [new TextRun('   4.1 Token Supply')] }),
      new Paragraph({ children: [new TextRun('   4.2 Token Allocation')] }),
      new Paragraph({ children: [new TextRun('5. Earning Mechanics')] }),
      new Paragraph({ children: [new TextRun('   5.1 User Earning Methods')] }),
      new Paragraph({ children: [new TextRun('   5.2 Artist Earning Methods')] }),
      new Paragraph({ children: [new TextRun('   5.3 Anti-Abuse Measures')] }),
      new Paragraph({ children: [new TextRun('6. Spending Mechanics')] }),
      new Paragraph({ children: [new TextRun('   6.1 User Spending Options')] }),
      new Paragraph({ children: [new TextRun('   6.2 Artist Spending Options')] }),
      new Paragraph({ children: [new TextRun('7. Conversion Flow')] }),
      new Paragraph({ children: [new TextRun('   7.1 Phase 1: MVP (Off-Chain)')] }),
      new Paragraph({ children: [new TextRun('   7.2 Phase 2: TON Integration')] }),
      new Paragraph({ children: [new TextRun('   7.3 Phase 3: Full Ecosystem')] }),
      new Paragraph({ children: [new TextRun('8. Revenue Loop & Sustainability')] }),
      new Paragraph({ children: [new TextRun('9. Smart Contract Architecture')] }),
      new Paragraph({ children: [new TextRun('10. Vesting & Token Release Schedule')] }),
      new Paragraph({ children: [new TextRun('11. Roadmap')] }),
      new Paragraph({ children: [new TextRun('12. Risk Factors')] }),
      new Paragraph({ children: [new TextRun('13. Conclusion')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('1. Executive Summary')] }),
      new Paragraph({ children: [new TextRun('ZIMBEAT (ZBT) is a usage-driven utility token built on the TON blockchain, designed to incentivize music engagement and support local artists in Zimbabwe through a Telegram MiniApp platform.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('Unlike traditional memecoins, ZBT is earned through real user activity—not speculation. The token economy flows from users to artists, creating a sustainable circular ecosystem that rewards authentic engagement with music quizzes and content consumption.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('Key highlights:')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Fixed total supply of 1 billion ZBT tokens')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('40% allocated to user rewards, 25% to artist rewards')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Built on TON blockchain for seamless Telegram integration')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Phased rollout from MVP (off-chain) to full blockchain integration')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Comprehensive anti-abuse mechanisms to prevent farming')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('2. Overview')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('2.1 What is ZIMBEAT?')] }),
      new Paragraph({ children: [new TextRun('ZIMBEAT is a Telegram MiniApp that combines music quizzes with a reward token economy. Users participate in music quizzes to learn about and engage with local music, earning ZBT tokens in the process. Artists whose music is featured in quizzes and played on the platform also earn ZBT tokens.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('The platform serves three primary purposes:')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Educate users about Zimbabwean music through gamified quizzes')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Reward users for engagement and learning')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Provide sustainable revenue streams for local artists')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('2.2 Why Zimbabwe?')] }),
      new Paragraph({ children: [new TextRun('Zimbabwe has a vibrant music scene with talented artists who often struggle with monetization. By creating a platform specifically designed for Zimbabwean music, ZIMBEAT addresses several market gaps:')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Limited monetization channels for local artists')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('High mobile and Telegram penetration in Zimbabwe')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Growing youth population interested in music and technology')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Need for platforms that celebrate and promote local culture')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('2.3 Why TON Blockchain?')] }),
      new Paragraph({ children: [new TextRun('TON (The Open Network) was selected as the underlying blockchain for several key reasons:')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Native Telegram integration through TON Connect')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Low transaction fees and fast block times')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('High scalability capable of supporting millions of users')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Growing ecosystem and developer community')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('User-friendly wallet experience for non-crypto users')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('3. Core Philosophy')] }),
      new Paragraph({ children: [new TextRun('The ZIMBEAT token economics design is guided by four fundamental principles:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('1. Reward Engagement, Not Speculation')] }),
      new Paragraph({ children: [new TextRun('ZBT is earned through authentic user activity—participating in quizzes, listening to music, and engaging with content. This ensures that tokens flow to users who are genuinely interacting with the platform, not speculators seeking quick profits.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('2. Flow from Users to Artists')] }),
      new Paragraph({ children: [new TextRun('The token economy is designed to circulate from users to artists. Users earn ZBT by engaging with music, then spend it on premium content, boosts, and features—much of which flows back to artists as revenue. This creates a virtuous cycle where user engagement directly supports creators.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('3. Earn First, Spend Second')] }),
      new Paragraph({ children: [new TextRun('Tokens are primarily earned through activity before they can be spent. This usage-driven model prevents speculative trading and ensures that the token economy is anchored in real utility rather than market hype.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('4. Avoid Inflation Abuse')] }),
      new Paragraph({ children: [new TextRun('Through a fixed supply, daily earning caps, and anti-abuse mechanisms, ZIMBEAT prevents token farming and inflationary pressure that could devalue token holders.')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('4. Token Economics')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('4.1 Token Supply')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: 'Token Name: ', bold: true }), new TextRun('ZIMBEAT')] }),
      new Paragraph({ children: [new TextRun({ text: 'Token Symbol: ', bold: true }), new TextRun('ZBT')] }),
      new Paragraph({ children: [new TextRun({ text: 'Network: ', bold: true }), new TextRun('TON Blockchain')] }),
      new Paragraph({ children: [new TextRun({ text: 'Token Type: ', bold: true }), new TextRun('Utility / Reward Token')] }),
      new Paragraph({ children: [new TextRun({ text: 'Standard: ', bold: true }), new TextRun('Jetton (TON)')] }),
      new Paragraph({ children: [new TextRun({ text: 'Total Supply: ', bold: true }), new TextRun('1,000,000,000 ZBT (Fixed)')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('4.2 Token Allocation')] }),
      new Paragraph({ children: [new TextRun('The total supply of 1 billion ZBT is allocated as follows:')] }),
      new Paragraph({ children: [new TextRun('')] }),

      new Table({
        columnWidths: [2000, 2000, 5360],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Allocation', bold: true, size: 22 })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Percentage', bold: true, size: 22 })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Purpose', bold: true, size: 22 })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('User Rewards')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('40%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('400M tokens for quiz participation, engagement milestones, and referrals')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Artist Rewards')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('25%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('250M tokens for artists whose songs are used in quizzes and listened to')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Ecosystem & Growth')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('15%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('150M tokens for strategic partnerships, marketing, and platform growth')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Team & Development')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('10%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('100M tokens for team building and ongoing development (vested 12-24 months)')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Liquidity')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('5%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('50M tokens for exchange liquidity and market making')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Reserve')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('5%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 5360, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('50M tokens reserved for stability and future initiatives')] })] })
            ]
          })
        ]
      }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('5. Earning Mechanics')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.1 User Earning Methods')] }),
      new Paragraph({ children: [new TextRun('Users can earn ZBT tokens through the following activities:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '1. Quiz Answers:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Correct answers: 1-5 ZBT per question')] }),
      new Paragraph({ children: [new TextRun('   • Difficulty-based reward scaling')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '2. Daily Streaks:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Consecutive daily participation bonuses')] }),
      new Paragraph({ children: [new TextRun('   • Multipliers for 7-day, 30-day, and 100-day streaks')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '3. Referrals:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Invite new users and earn ZBT when they complete their first quiz')] }),
      new Paragraph({ children: [new TextRun('   • Bonus for referred user activity in first 30 days')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '4. Listening Milestones:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Rewards for reaching listening thresholds')] }),
      new Paragraph({ children: [new TextRun('   • Anti-bot verification required')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.2 Artist Earning Methods')] }),
      new Paragraph({ children: [new TextRun('Artists earn ZBT based on their engagement with the platform:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '1. Quiz Usage:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Tokens earned when songs are featured in quizzes')] }),
      new Paragraph({ children: [new TextRun('   • Proportional to quiz completion rates')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '2. Track Listens:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Payment per verified listen')] }),
      new Paragraph({ children: [new TextRun('   • Fraud detection prevents artificial streaming')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '3. Fan Engagement:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • Tokens earned when users interact with artist content')] }),
      new Paragraph({ children: [new TextRun('   • Comments, shares, and likes drive rewards')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '4. Exclusive Content:', bold: true })] }),
      new Paragraph({ children: [new TextRun('   • When users unlock premium content, artists earn ZBT')] }),
      new Paragraph({ children: [new TextRun('   • Artists set pricing for exclusive materials')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.3 Anti-Abuse Measures')] }),
      new Paragraph({ children: [new TextRun('To maintain integrity and prevent farming, ZIMBEAT implements several protective measures:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun({ text: 'Daily Earning Cap: ', bold: true }), new TextRun('Maximum of 20 ZBT per user per day to prevent excessive accumulation')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun({ text: 'Telegram ID Binding: ', bold: true }), new TextRun('One account per Telegram user prevents multiple accounts')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun({ text: 'Randomized Quiz Logic: ', bold: true }), new TextRun('Questions and answers are randomized to prevent pattern exploitation')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun({ text: 'Device Fingerprinting: ', bold: true }), new TextRun('Light bot detection to identify automated activity')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun({ text: 'Verification Requirements: ', bold: true }), new TextRun('Listening rewards require audio playback verification')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('6. Spending Mechanics')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('6.1 User Spending Options')] }),
      new Paragraph({ children: [new TextRun('Users can spend their earned ZBT on various features and content:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Premium Quiz Modes')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Access exclusive quiz categories')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Remove ads from quiz experience')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Exclusive Artist Content')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Unlock premium tracks, videos, and behind-the-scenes content')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Access early releases and demos')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Quiz Theme Voting')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Vote on upcoming quiz themes and featured artists')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Merchandise Discounts')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Get discounts on artist merchandise and music products')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Concert Raffles')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Enter raffles for concert tickets and exclusive events')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('6.2 Artist Spending Options')] }),
      new Paragraph({ children: [new TextRun('Artists can spend their earned ZBT to boost visibility and grow their audience:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Song Boosting')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Boost songs in platform playlists for more visibility')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Quiz Promotion')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Promote quizzes featuring their music to more users')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('Analytics Access')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Unlock detailed fan analytics and listening data')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('New Release Features')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('   • Pay to feature new releases prominently on the platform')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('7. Conversion Flow')] }),
      new Paragraph({ children: [new TextRun('ZIMBEAT follows a phased approach to on-chain integration:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('7.1 Phase 1: MVP (Off-Chain)')] }),
      new Paragraph({ children: [new TextRun('Current phase focuses on user acquisition and product-market fit:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Users earn internal points through quiz participation')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Internal ledger tracks all user balances and transactions')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('No blockchain friction ensures smooth onboarding')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Focus on user experience and platform stability')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('7.2 Phase 2: TON Integration')] }),
      new Paragraph({ children: [new TextRun('Integration with TON blockchain:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Points convert to ZBT tokens (example: 100 points = 1 ZBT)')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('TON Connect wallet integration for seamless wallet connection')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Manual withdrawal thresholds implemented to manage gas costs')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Smart contracts deployed for token management')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('7.3 Phase 3: Full Ecosystem')] }),
      new Paragraph({ children: [new TextRun('Complete on-chain implementation:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('All transactions occur on-chain')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Advanced smart contract features for complex reward logic')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Decentralized treasury and governance mechanisms')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Cross-platform integrations and external partnerships')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('8. Revenue Loop & Sustainability')] }),
      new Paragraph({ children: [new TextRun('ZIMBEAT creates a sustainable circular economy:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('1. Brands Sponsor Quizzes')] }),
      new Paragraph({ children: [new TextRun('   • Companies pay in TON to sponsor quiz themes')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('2. Platform Buys ZBT')] }),
      new Paragraph({ children: [new TextRun('   • Revenue is used to purchase ZBT from the open market')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('3. ZBT Redistribution')] }),
      new Paragraph({ children: [new TextRun('   • Purchased ZBT is redistributed to users and artists as rewards')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('4. Demand > Supply')] }),
      new Paragraph({ children: [new TextRun('   • Continuous buying pressure from platform revenue supports token value')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('This revenue loop ensures that external sponsorship revenue directly benefits the ecosystem by creating buy pressure on ZBT, supporting token value, and providing sustainable rewards for users and artists.')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('9. Smart Contract Architecture')] }),
      new Paragraph({ children: [new TextRun('The ZBT token smart contract will follow the TON Jetton standard with the following components:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('9.1 Token Contract')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Standard TON Jetton implementation')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Fixed supply with no minting function')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Secure transfer and approval mechanisms')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Batch transfer support for efficient reward distribution')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('9.2 Reward Distribution Contract')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Automated reward distribution based on verified activity')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Anti-abuse checks integrated into distribution logic')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Batch processing for gas efficiency')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('9.3 Treasury Wallet')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Multi-sig wallet for ecosystem and liquidity tokens')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Time-locked release schedule for strategic initiatives')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Transparent on-chain transaction history')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('10. Vesting & Token Release Schedule')] }),
      new Paragraph({ children: [new TextRun('To ensure long-term commitment and prevent token dumping, strategic tokens are subject to vesting:')] }),
      new Paragraph({ children: [new TextRun('')] }),

      new Table({
        columnWidths: [3120, 3120, 3120],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Allocation', bold: true, size: 22 })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Vesting Period', bold: true, size: 22 })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Release Schedule', bold: true, size: 22 })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Team & Development')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('12-24 months')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('6-month cliff, then monthly linear vesting')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Artist Incentives')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('Performance-based')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Released as engagement milestones are met')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Ecosystem & Growth')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('24 months')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Released quarterly based on roadmap achievements')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Liquidity')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('Immediate')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Deployed to exchanges at TGE')] })] })
            ]
          })
        ]
      }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('11. Roadmap')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Q1 2025 - MVP Launch')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Launch Telegram MiniApp with quiz functionality')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Onboard first wave of Zimbabwean artists')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Implement internal point system')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Build community on Telegram')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Q2 2025 - TON Integration')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Deploy ZBT smart contracts on TON')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Integrate TON Connect wallet')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Enable point-to-ZBT conversion')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Launch on DEX')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Q3 2025 - Ecosystem Growth')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Premium content marketplace launch')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Artist analytics dashboard')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Brand sponsorship program')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Merchandise integration')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Q4 2025 - Full Ecosystem')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Advanced smart contract features')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Decentralized governance implementation')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Cross-platform integrations')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('CEX listings')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('2026+ - Expansion')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Expand to other African markets')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Launch artist NFT marketplace')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Integrate with other music platforms')] }),
      new Paragraph({ numbering: { reference: 'bullet-list', level: 0 }, children: [new TextRun('Live event integration')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('12. Risk Factors')] }),
      new Paragraph({ children: [new TextRun('Investors and participants should be aware of the following risks:')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('12.1 Market Adoption Risk')] }),
      new Paragraph({ children: [new TextRun('Success depends on widespread adoption by users and artists. If the platform fails to attract sufficient users or artists, the token economy may not achieve sustainability.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('12.2 Regulatory Risk')] }),
      new Paragraph({ children: [new TextRun('Cryptocurrency regulations are evolving globally and may impact token operations, trading, or utility. Changes in regulations in Zimbabwe or major markets could affect the project.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('12.3 Technical Risk')] }),
      new Paragraph({ children: [new TextRun('Smart contract vulnerabilities, platform bugs, or TON network issues could result in loss of funds or service interruptions. While audits and testing will be conducted, risks remain.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('12.4 Liquidity Risk')] }),
      new Paragraph({ children: [new TextRun('Token liquidity depends on exchange listings and market making. Limited liquidity could result in high volatility or difficulty exiting positions.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('12.5 Economic Model Risk')] }),
      new Paragraph({ children: [new TextRun('The circular economy model relies on continuous brand sponsorship revenue. Failure to secure sponsors could impact the sustainability of reward distributions.')] }),
      new Paragraph({ children: [new PageBreak()] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('13. Conclusion')] }),
      new Paragraph({ children: [new TextRun('ZIMBEAT represents a new approach to tokenomics—one that prioritizes real utility, authentic engagement, and sustainable growth over speculation.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('By creating a platform where tokens are earned through meaningful interaction with music and spent on value-adding features, ZIMBEAT aims to build an ecosystem that truly benefits users and artists alike.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('The fixed supply, comprehensive anti-abuse measures, and phased rollout strategy demonstrate a commitment to long-term sustainability and responsible token economics.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('As Zimbabwe continues to embrace digital innovation, ZIMBEAT stands ready to empower local artists, educate music lovers, and create a model for community-driven token economies in Africa.')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('---')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: 'Disclaimer:', bold: true })] }),
      new Paragraph({ children: [new TextRun('This whitepaper is for informational purposes only and does not constitute financial advice. Participation in the ZIMBEAT platform and acquisition of ZBT tokens involves risks. Readers should conduct their own research and consult with financial advisors before making investment decisions.')] }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/home/z/my-project/upload/ZIMBEAT_Whitepaper.docx', buffer);
  console.log('Whitepaper created successfully!');
});
