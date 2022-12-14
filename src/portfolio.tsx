import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAEBIN LIM',
	title: 'CHAE BIN LIM',
	subTitle: [
		emoji("π¨βπ» μ΄λ¦ | μ μ± λΉ"),
		emoji("π μΆμμ κ³  | 92.03.14"),
	 	emoji("π μ£Όκ±°μ§ | μμΈνΉλ³μ κ°μκ΅¬"),
		emoji("βπ― νκ΅ | κ³ λ €λνκ΅ μ κΈ°μ μμ»΄ν¨ν°κ³΅νκ³Ό(μμ¬)"),
	],
	role: "Thank you for your visit",
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
	title: emoji("Skills π΄πΌββοΈ π΄πΌ π΄πΌββοΈ"),
	mainTitle: "β Main Skills",
	mainSkills: [
		emoji("β describe first"),
		emoji("β describe second"),
		emoji("β describe third"),
		emoji("β describe forth"),
		emoji("β describe fifth"),
	],
	mainLists: [
		{fontAwesome: "fab fa-java", text: "JAVA", proficiency: 80},
		{fontAwesome: "fab fa-envira", text: "SPRING", proficiency: 80},
		{fontAwesome: "fab fa-angular", text: "ANGULAR", proficiency: 70},
		{fontAwesome: "fab fa-github", text: "GITHUB", proficiency: 80},
		{fontAwesome: "fab fa-gitlab", text: "GITLAB", proficiency: 70},
		{fontAwesome: "fab fa-bitbucket", text: "BITBUCKET", proficiency: 60},
		{fontAwesome: "fab fa-atlassian", text: "ATLASSIAN", proficiency: 60},
		{fontAwesome: "fab fa-confluence", text: "CONFLUENCE", proficiency: 60},
		{fontAwesome: "fab fa-jira", text: "JIRA", proficiency: 60},
		{fontAwesome: "fab fa-linux", text: "LINUX", proficiency: 70},
		{fontAwesome: "fab fa-docker", text: "DOCKER", proficiency: 85}

	],
	subTitle: "β Sub Skills",
	subLists: [
		{fontAwesome: "fab fa-jenkins", text: "JENKINS", proficiency: 60},
		{fontAwesome: "fab fa-python", text: "PYTHON", proficiency: 50},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 50},
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 40}

	],
	language: "β Language Skills",
	languageLists: [
		{fontAwesome: "fab fa-canadian-maple-leaf", text: "ENGLISH", proficiency: 75}
	],
	describeSkills: [
		emoji("βοΈ Use Java with Spring"),
		emoji("βοΈ Use Angular"),
		emoji("βοΈ Use GitHub / GitLab / BitBucket"),
		emoji("βοΈβ Use Docker"),
		emoji("πͺ Try Vmware / AWS / Kubernetes / vue.js / react"),
		emoji("π Speak Korean  π°π· / Japanese π―π΅ / English π¨π¦"),
	],
	view: true
};

export const experience = {
	title: "π» Work Experience",
	lists: [
		{
			role: "IT TEAM MANAGING",
			company: "IT MANAGER (BISCOO)",
			date: "2020.02 ~ 2020.05"
		},
		{
			role: "ABL U2L Project",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.06 ~ 2020.07"
		},
		{
			role: "νμ  νλΈν Project",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.08 ~ 2020.11"
		},
		{
			role: "νλμλμ°¨ PaaS PlatForm κ³΅ν΅ λͺ¨λ κ°λ°",
			company: "Full-Stack Developer (Crossent)",
			date: "2020.12 ~ 2021.03"
		},
		{
			role: "νλμλμ°¨ DataCatalog κ°λ°",
			company: "Full-Stack Developer (Crossent)",
			date: "2021.04 ~ 2022.02"
		},
		{
			role: "API-GW κ°λ°",
			company: "Back-End Developer (Okestro)",
			date: "2022.02 ~ 2022.05"
		},
		{
			role: "private Cloud κ°λ°",
			company: "Back-End Developer (Okestro)",
			date: "2022.06 ~ present"
		},
	],
	view: true
}

export const achievements = {
	achievementTitle: emoji("Achievements π°π· π―π΅ π¨π¦"),
	achievementList: [
		{
			title: "π―π΅ Shurin Japanese School",
			desc: "(2015.01 ~ 2015.02)"
		},
		{
			title: "π―π΅ Working Holiday",
			desc: "(2015.07 ~ 2017.05)"
		},
		{
			title: "π¨π¦ OHC Calgary",
			desc: "(2017.05 ~ 2017.07)"
		},
		{
			title: "π¨π¦ Working Holiday",
			desc: "(2017.05 ~ 2019.02)"
		},
		{
			title: "π°π· λΆμ° IT κ΅μ‘μΌν°",
			desc: "(2019.06 ~ 2020.01)"
		},

	],
	certificationTitle: emoji("Certifications π"),
	certificationList: [
		{
			title: "π μ΄μ λ©΄ν 1μ’λ³΄ν΅",
			desc: "(2010.07)"
		},
		{
			title: "π SKI LEVEL 1 π°π·",
			desc: "(2013.02)"
		},
		{
			title: "π SNOW BOARD LEVEL 1 π°π·",
			desc: "(2013.02)"
		},
		{
			title: "π MOS MASTER",
			desc: "(2013.03)"
		},
		{
			title: "π μ μ°νκ³ 1κΈ",
			desc: "(2014.04)"
		},
		{
			title: "π λ¬΄μ­κ΄λ¦¬μ¬",
			desc: "(2014.09)"
		},
		{
			title: "π SKI TEACHING 1 π°π·",
			desc: "(2017.03)"
		},
		{
			title: "π SKI LEVEL 2 π¨π¦",
			desc: "(2018.12)"
		},
		{
			title: "π μ λ³΄μ²λ¦¬κΈ°μ¬",
			desc: "(2019.11)"
		}
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me π€",
	subTitle: "best regards",
	email: emoji("π¬ cheabin92@gmail.com"),
	phone: emoji("π± 010 8301 9820"),
	view: true
}