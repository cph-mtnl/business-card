import SocialLink from "./SocialLink";

const Footer = () => {
   const data = [
        {
           icon: "twitter-square",
           link: "www.facebook.com"
        },
        {
            icon: "facebook-square",
            link: "www.facebook.com"
         },
         {
            icon: "instagram-square",
         },
         {
            icon: "linkedin",
            link: "www.facebook.com"
         },
         {
            icon: "github-square",
            link: "www.facebook.com"
         },
    ]

    const ComponentName = "SocialLink";

    return (
        <div className="footer">
            {data.map((item) => {
                return <ComponentName icon={item.icon} link={item.link} />
            })}
        </div>
    );
}

export default Footer;