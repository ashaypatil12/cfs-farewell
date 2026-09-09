// Colour palette cycled across cards
const palette = [
  "linear-gradient(135deg,#ff6ec4,#7873f5)",
  "linear-gradient(135deg,#42e695,#3bb2b8)",
  "linear-gradient(135deg,#ffd36e,#ff8177)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#f857a6,#ff5858)",
  "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#30cfd0,#330867)",
  "linear-gradient(135deg,#ff9a9e,#fecfef)",
  "linear-gradient(135deg,#5ee7df,#b490ca)",
];

const colleagues = [
  {
    name: "Simone Heaperman",
    role: "Manager",
    peek: "For every bit of guidance and trust...",
    message: "Simone, thank you for being the kind of manager who genuinely invests in people, not just projects. You always made time to talk about my growth, pushed me to set bigger goals, and trusted me with responsibility even when I was still learning. I've grown so much under your leadership — thank you for believing in me."
  },
  {
    name: "Sean Lee",
    role: "Skip Manager",
    peek: "For the bigger picture you always showed me...",
    message: "Sean, even though we didn't work together day-to-day, your leadership shaped the environment our whole team thrived in. Thank you for creating a culture where people feel safe to speak up, take ownership, and do their best work. It hasn't gone unnoticed."
  },
  {
    name: "Sravani Yalla",
    role: "Offshore Lead, Oracle HCM",
    peek: "For carrying the team on your shoulders...",
    message: "Sravani, you are the glue that holds our offshore team together. Watching you resolve incident after incident while still leading with patience and calm taught me what real ownership looks like. Thank you for every late call, every 'let me handle it', and every bit of trust you placed in me."
  },
  {
    name: "Mahima Gattani",
    role: "Comp & HCM Collaborator",
    peek: "For breaking things with me (on purpose!)...",
    message: "Mahima, from 'we broke the navigation' during compensation testing to countless problem-solving sessions, you made even the most stressful releases feel like fun. Thank you for your energy, your honesty, and for always being just a message away. You made this job so much better."
  },
  {
    name: "Sachin Kewale",
    role: "Oracle Cloud Applications",
    peek: "For bringing the team together, always...",
    message: "Sachin, you have this quiet way of making sure no one feels left out — organising send-offs, checking in, keeping the team spirit alive. Thank you for your reliability and warmth. CFS is lucky to have someone like you holding things together."
  },
  {
    name: "Shraddha Pawar",
    role: "Oracle HCM Team",
    peek: "For always showing up...",
    message: "Shraddha, your consistency and calm problem-solving made a real difference on more projects than I can count. Thank you for being someone I could always count on, no matter how tight the deadline got."
  },
  {
    name: "Harrish Desikan Varatharajan",
    role: "Oracle HCM Team",
    peek: "For the handovers and the honesty...",
    message: "Harrish, thank you for every handover plan we built together and every honest conversation about how to do things better. Your attention to detail rubbed off on me more than you know — I'm a better consultant because of it."
  },
  {
    name: "Yashaswini Yedire",
    role: "Oracle HCM Team",
    peek: "For your positivity on tough days...",
    message: "Yashaswini, you bring such steady positivity to the team — even on the days when everything seemed to be on fire. Thank you for that energy and for always being willing to jump in and help."
  },
  {
    name: "Isabella Parisi",
    role: "Compensation Manager",
    peek: "For all the testing links you chased me for!",
    message: "Isabella, 'can you send the test link please' will forever remind me of the fun we had testing compensation cycles together. Thank you for your patience with every environment hiccup and for being such a pleasure to work with."
  },
  {
    name: "Ryan Ho",
    role: "Payroll Admin",
    peek: "For keeping payroll (and me) sane...",
    message: "Ryan, payroll issues are never simple, but working with you always made them feel manageable. Thank you for your sharp eye for detail and your calm approach to solving even the messiest problems."
  },
  {
    name: "Jyothi Jayapal",
    role: "Employee Admin",
    peek: "For being a great sport during testing!",
    message: "Jyothi, I still laugh thinking about your login being the one that 'broke' navigation during testing — thank you for being such a good sport, and for the genuine collaboration on every cycle we worked through together."
  },
  {
    name: "Ellen Xie",
    role: "Job Tester, Oracle HCM",
    peek: "For your thoroughness, every single time...",
    message: "Ellen, thank you for the careful, thorough way you approach every test scenario. It made our releases so much safer, and working alongside you taught me to slow down and be more precise myself."
  },
  {
    name: "Nandita Pallavi",
    role: "Oracle HCM Team",
    peek: "For the offer letter template — genius work!",
    message: "Nandita, the offer letter template you built saved the team so much time and effort — that's the kind of quiet, brilliant contribution that makes a real difference. Thank you for your creativity and for always being willing to build something better."
  },
  {
    name: "Haritha Tammineni",
    role: "Oracle HCM Team",
    peek: "For your dependable support...",
    message: "Haritha, thank you for your steady support through handovers, testing cycles, and everything in between. Working with you always felt easy, and that's rarer than people realise."
  },
  {
    name: "Lavanyadevi Anburaj",
    role: "Oracle HCM Team",
    peek: "For the planning sessions and patience...",
    message: "Lavanyadevi, thank you for the thought and care you put into every planning discussion we had. Your patience and clarity made complex handovers feel a lot less daunting."
  },
  {
    name: "Daniel Hammersley",
    role: "Corporate Core Team",
    peek: "For being a great teammate...",
    message: "Daniel, thank you for the collaborative spirit you brought to the team. It was a pleasure working alongside you, and I wish you continued success in everything ahead."
  },
  {
    name: "Akash Dhamodharan",
    role: "Corporate Core Team",
    peek: "For always lending a hand...",
    message: "Akash, thank you for your willingness to help whenever it was needed and for the good energy you brought to our team discussions. Wishing you all the best!"
  },
  {
    name: "Thomas Anto",
    role: "Corporate Core Team",
    peek: "For the reliable support...",
    message: "Thomas, thank you for being someone the team could always rely on. Your steady contributions made a real difference, and I'm grateful to have worked with you."
  },
  {
    name: "Vinay Nagaraja",
    role: "Corporate Core Team",
    peek: "For the shared problem-solving...",
    message: "Vinay, thank you for the many problem-solving conversations and the effort you put into getting things right. It was great being on the same team as you."
  },
  {
    name: "Chitti Babu Vemala",
    role: "Corporate Core Team",
    peek: "For your calm, capable approach...",
    message: "Chitti, thank you for the calm and capable way you tackled every task that came your way. Working with you was always straightforward and enjoyable."
  },
  {
    name: "Bilaal Adam",
    role: "Corporate Core Team",
    peek: "For being dependable, always...",
    message: "Bilaal, thank you for your dependability and the genuine effort you brought to the team every day. I really valued working with you."
  },
  {
    name: "Venkat Kamatham",
    role: "Corporate Core Team",
    peek: "For the technical insight you shared...",
    message: "Venkat, thank you for the technical insight and thoughtful input you brought to our discussions. I learned a lot from working alongside you."
  },
  {
    name: "Kelvin-James Russell",
    role: "Corporate Core Team",
    peek: "For the good humour and hard work...",
    message: "Kelvin-James, thank you for balancing hard work with good humour — that combination made even tough weeks feel lighter. Wishing you the very best ahead."
  },
  {
    name: "Prabhu Maylsamy Ramasamy",
    role: "Corporate Core Team",
    peek: "For your quiet dedication...",
    message: "Prabhu, thank you for the quiet dedication you brought to every task. It was a pleasure being your teammate, and I wish you continued success."
  },
  {
    name: "Prasad Kota",
    role: "Corporate Core Team",
    peek: "For always being ready to help...",
    message: "Prasad, thank you for always being ready to jump in and help, no matter the ask. Your support made a real difference to the team."
  },
  {
    name: "Vinay Kumar",
    role: "Corporate Core Team",
    peek: "For your steady contributions...",
    message: "Vinay, thank you for the steady, thoughtful contributions you made across our projects. It was great working with you."
  },
  {
    name: "Surendra Rodge",
    role: "Corporate Core Team",
    peek: "For your positive attitude...",
    message: "Surendra, thank you for the positive attitude you brought to the team, even during the busiest sprints. I really appreciated working alongside you."
  },
  {
    name: "Anjan Ganguly",
    role: "Corporate Core Team",
    peek: "For your thoughtful problem-solving...",
    message: "Anjan, thank you for your thoughtful approach to problem-solving and the care you put into your work. It's been a pleasure being on this team with you."
  },
  {
    name: "Priyaranjan Nayak",
    role: "Corporate Core Team",
    peek: "For your consistent effort...",
    message: "Priyaranjan, thank you for the consistent effort and reliability you brought to the team. Working with you always felt easy and collaborative."
  },
  {
    name: "Avinab Sahoo",
    role: "Corporate Core Team",
    peek: "For your enthusiasm on every project...",
    message: "Avinab, thank you for the enthusiasm and energy you brought to every project we worked on together. It made a real difference to the team's spirit."
  },
  {
    name: "Naveen Singh",
    role: "Corporate Core Team",
    peek: "For your reliable teamwork...",
    message: "Naveen, thank you for being such a reliable teammate and for the genuine effort you put into everything you touched. All the best for what's next!"
  },
  {
    name: "Mounisha Bandlamudi",
    role: "Corporate Core Team",
    peek: "For your fresh energy and ideas...",
    message: "Mounisha, thank you for the fresh energy and ideas you brought to the team. I really enjoyed working with you and wish you a fantastic journey ahead."
  }
];
