function data(id: number, title: string, thumbnail: string, src: string, icon: string, to: string, result: string, deskripsi: string) {
  return { id, aos, title, thumbnail, src, icon, to, result, deskripsi };
}

export const achievements = [
  data(
    1,
    "Hackathon Maritime 2021",
    "icon/hackathon.svg",
    "icon/maritime-explore.svg",
    "ri:team-fill",
    "/images/sertifikat-hackathon.jpg",
    "Semifinalist",
    "This competition was organized by the Maritime Potential Development Service at the Navy Headquarters (Dispotmar Mabesal) in order to raise the potential of the nation's children in the field of maritime digital product innovation."
  ),
  data(
    2,
    "KKSI 2021",
    "icon/kksi.svg",
    "icon/go-prakerin.svg",
    "ri:team-fill",
    "pdf/sertifikat-kksi.pdf",
    "1st Runner Up",
    "KKSI stands for Indonesian Vocational Creative Camp, which is a national-scale event that is routinely held by the Ministry of Education and Culture and the Directorate General of Vocational Education assisted by SMK administrators or organizers."
  ),
  data(
    3,
    "Coding di Skilvul Playground",
    "icon/skilvul.svg",
    "icon/html.svg",
    "bxs:user",
    "https://skilvul.com/paths/coding-di-skilvul-playground/student/ckqzaqvkkbpov0722lngebxow",
    "Complete",
    "Write coding without having to install other applications and immediately see the results of your code in one place. Create Your First Website Page using Skillvul Playground, only at Skillvul Playground!"
  ),
  data(
    4,
    "Bootstrap 5 - Website Landing Page",
    "icon/skilvul.svg",
    "icon/bootstrap.svg",
    "bxs:user",
    "https://skilvul.com/courses/bootstrap-5-membuat-website-landing-page/student/ckqzaqvr4bppp0722g5uqhx0w",
    "SkilPoin 320/385",
    "Bootstrap is a free and open source CSS framework. this working build contains HTML and CSS-based design templates for form, navigation, and other interface components, as well as JavaScript-enabled extensions."
  ),
];
