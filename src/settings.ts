export const profile = {
	fullName: 'Yaseswini Neelamraju',
	title: 'Research Scientist, Bioinformatics & Computational Biology',
	institute: '',
	author_name: 'Yaseswini Neelamraju', // Author name to be highlighted in the papers section
	fullName_navbar: 'Yaseswini Neelamraju,PhD',
	key_competencies: [
							{ title: 'Mentorship' , 
							  description: 'Since 2022, I’ve mentored undergraduate students in computational biology, guiding them in research and bioinformatics, helping them develop essential skills in the field' 
							},
							{ title: 'Collaboration',
							  description: 'I’ve worked with global researchers, using my bioinformatics expertise to drive impactful oncology collaborations, advancing cancer genomics and improving patient outcomes'
							},
							{
							   title: 'Communication',
							   description:'I communicate complex bioinformatics concepts through publications and presentations, enabling effective collaboration and contributing to the advancement of research and bioinformatics solutions'
							},
					   ],
	//Research areas:
	research_areas: [
				{ title: 'Bioinformatics' , 
				  description: '' , 
				},
				{ title: 'Oncology' },
				{ title: 'Hematology Oncology' , description : 'Experienced in conducting clinical research, utilizing bioinformatics to analyze multi-omic data and uncover new therapeutic targets. Involved in cutting-edge clinical trials and the development of novel cancer therapies' },
				{ title: 'Machine learning' } , 
				{ title: 'Biomarker discovery' },
			], 
	skills_ds: [
				{ title: 'R' },
				{ title: 'Python' },
			],
	skills_da:[
				{ title: 'R' },
				{ title: 'Python' },
			],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'yaseswini.1404@gmail.com',
	linkedin: 'https://www.linkedin.com/in/yaseswinineelamraju/',
	x: '',
	github: 'https://github.com/Yaseswini',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=wzrrprAAAAAJ',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
