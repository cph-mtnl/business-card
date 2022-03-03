import SocialLink from "./SocialLink";

const Footer = () => {
   const data = [
        {
           icon: "twitter-square",
           link: "https://www.facebook.com"
        },
        {
            icon: "facebook-square",
            link: "https://www.facebook.com"
         },
         {
            icon: "instagram-square",
         },
         {
            icon: "linkedin",
            link: "https://www.facebook.com"
         },
         {
            icon: "github-square",
            link: "https://www.facebook.com"
         },
    ]

    return (
        <div className="footer">
            {data.map((item) => {
                return <SocialLink icon={item.icon} link={item.link} />
            })}
        </div>
    );
}

export default Footer;