import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAEBIN LIM',
	title: 'CHAE BIN LIM',
	subTitle: [
		emoji("👨‍💻 이름 | 임 채 빈"),
		emoji("🙊 출생신고 | 92.03.14"),
	 	emoji("🛖 주거지 | 서울특별시 강서구"),
		emoji("‍🐯 학교 | 고려대학교 전기전자컴퓨터공학과(석사)"),
	],
	role: "Thank you for your visit 🇰🇷🇯🇵🇨🇦",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	github: 'https://github.com/JAVA-BIN',
	linkedin: 'https://www.linkedin.com/in/chaebin-lim-5920921ba/',
	email: 'cheabin92@gmail.com',
	instagram: "https://www.instagram.com/bin._.d/"
};

export const skills = {
	title: emoji("Skills 🚴🏼‍♀️ 🚴🏼 🚴🏼‍♂️"),
	mainTitle: "✔ Main Skills",
	mainSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	],
	mainLists: [
		{fontAwesome: "fab fa-java", text: "JAVA", proficiency: 80},
		{fontAwesome: "fab fa-envira", text: "SPRING", proficiency: 80},
		{fontAwesome: "fab fa-angular", text: "ANGULAR", proficiency: 70},
		{fontAwesome: "fab fa-github-alt", text: "GITHUB", proficiency: 80},
		{fontAwesome: "fab fa-gitlab", text: "GITLAB", proficiency: 70},
		{fontAwesome: "fab fa-bitbucket", text: "BITBUCKET", proficiency: 60},
		{fontAwesome: "fab fa-docker", text: "DOCKER", proficiency: 85}

	],
	subTitle: "✔ Sub Skills",
	subLists: [
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 50},
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 40}

	],
	language: "✔ Language Skills",
	languageLists: [
		{fontAwesome: "fab fa-canadian-maple-leaf", text: "ENGLISH", proficiency: 75}

	],
	describeSkills: [
		emoji("✏️ describe first"),
		emoji("✏️ describe second"),
		emoji("✏️ describe third"),
		emoji("✏️ describe forth"),
		emoji("✏️ describe fifth"),
	],
	view: true
};

export const experience = {
	title: "💻 Work Experience",
	lists: [
		{
			role: "IT TEAM MANAGING",
			company: "IT MANAGER (BISCOO)",
			date: "2020.02 ~ 2020.05"
		},
		{
			role: "ABL U2L Project",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.08 ~ 2020.11"
		},
		{
			role: "한전 허브팝 Project",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.08 ~ 2020.11"
		},
		{
			role: "현대자동차 PaaS PlatForm 공통 모듈 개발",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.12 ~ 2021.03"
		},
		{
			role: "현대자동차 DataCatalog 개발",
			company: "Full-Stack Developer (Crossent)",
			date: "2021.04 ~ 2022.02"
		},
		{
			role: "API-GW 개발",
			company: "Back-End Developer (Okestro)",
			date: "2022.02 ~ 2022.05"
		},
		{
			role: "Openstack Solution 개발",
			company: "Back-End Developer (Okestro)",
			date: "2022.06 ~ present"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Certifications 🏆"),
	subTitle: "나의 소중한 자격증..",
	lists: [
		{
			title: "🏆 운전면허 자격증",
			desc: "(2010.07)"
		},
		{
			title: "🏆 MOS MASTER",
			desc: "(2013.03)"
		},
		{
			title: "🏆 전산회계 1급",
			desc: "(2014.04)"
		},
		{
			title: "🏆 정보처리기사",
			desc: "(2019.11)"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me 🤙",
	subTitle: "best regards",
	email: emoji("📬 cheabin92@gmail.com"),
	phone: emoji("📱 010 8301 9820"),
	view: true
}