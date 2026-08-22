export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/our-work', label: 'Our Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const programs = [
  { number: '01', slug: 'kishalay', name: 'Poorbita Kishalay', title: 'Children, learning & talent', text: 'A child-centred talent-development program providing non-formal elementary and life-skills education for more than 200 economically disadvantaged children, particularly from Scheduled Tribe and Scheduled Caste communities.', focus: ['Literacy and numeracy', 'Life skills and talent development', 'Sports and physical growth', 'Creative and cultural learning', 'Art and craft', 'Nutrition support'], image: '/images/programs/kishalay-creative-learning.jpg', alt: 'Young children practising letters and drawing in a Poorbita Kishalay class', galleryCount: 48 },
  { number: '02', slug: 'agnishikha', name: 'Poorbita Agnishikha', title: 'Adolescent girl empowerment', text: 'Helping adolescent girls remain in education, prevent early marriage, understand menstrual health and their rights, and grow as confident, financially aware young leaders.', focus: ['School retention', 'Menstrual health', 'Rights and equality', 'Life skills', 'Leadership and financial literacy'], image: '/images/programs/agnishikha-session.jpg', alt: 'Adolescent girls participating in a Poorbita Agnishikha learning session', galleryCount: 26 },
  { number: '03', slug: 'jibika', name: 'Poorbita Jibika', title: 'Women, skills & livelihoods', text: 'Practical training and enterprise support for Indigenous and rural women in tailoring, Kantha embroidery, bamboo craft, stone carving and ready-made garments.', focus: ['Tailoring', 'Kantha embroidery', 'Bamboo craft', 'Stone carving', 'Design development'], image: '/images/programs/jibika-embroidery.jpg', alt: 'A woman creating detailed embroidery during a Poorbita skills program', galleryCount: 16 },
  { number: '04', slug: 'chetana', name: 'Poorbita Chetana', title: 'Awareness & capacity building', text: 'Community education on health, substance abuse, scientific thinking, superstition, safety and essential life skills.', focus: ['Health awareness', 'Substance-abuse prevention', 'Scientific awareness', 'Public health', 'Life-saving skills'], image: '/images/programs/chetana-awareness.jpg', alt: 'A community awareness session with students', galleryCount: 8 },
  { number: '05', slug: 'seva', name: 'Poorbita Seva', title: 'Health, nutrition & care', text: 'Health and eye camps, blood-donation drives, nutritious meals and the distribution of essential clothing and supplies.', focus: ['Medical camps', 'Eye care', 'Blood donation', 'Child nutrition', 'Essential supplies'], image: '/images/programs/seva-eye-care.jpg', alt: 'Community members receiving eye examinations at a Poorbita health camp', galleryCount: 21 },
  { number: '06', slug: 'sanskriti', name: 'Poorbita Sanskriti', title: 'Art, craft & culture', text: 'Preserving traditional arts and festivals while giving children and artisans structured training, mentorship and opportunities to perform or exhibit.', focus: ['Painting and clay', 'Traditional music and dance', 'Craft promotion', 'Cultural festivals', 'Artisan recognition'], image: '/images/programs/sanskriti-dance.jpg', alt: 'Women performing a traditional community dance in West Bengal', galleryCount: 27 },
  { number: '07', slug: 'krishi', name: 'Poorbita Krishi', title: 'Sustainable farming', text: 'Cultivating and conserving traditional rice varieties while advancing organic farming, kitchen gardens, biodiversity and pisciculture for food security and resilient rural incomes.', focus: ['Traditional rice cultivation', 'Rice-variety conservation', 'Organic farming', 'Kitchen gardens', 'Pisciculture and biodiversity'], image: '/images/programs/krishi-rice-varieties.jpg', alt: 'Labelled traditional rice varieties growing in a Poorbita conservation plot', galleryCount: 11 },
  { number: '08', slug: 'swapna', name: 'Poorbita Swapna', title: 'Future initiatives', text: 'A long-term vision for crèche and day-care support for young children and dignified residential care for Indigenous senior citizens.', focus: ['Crèche', 'Day care', 'Senior care'], image: null, alt: null, galleryCount: 0 },
];

export const getProgramGallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/images/programs/galleries/${slug}/photo-${String(index + 1).padStart(3, '0')}.jpg`,
    number: index + 1,
  }));
