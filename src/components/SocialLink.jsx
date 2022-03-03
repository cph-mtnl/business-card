const SocialLink = (props) => {
    const classes = `fab fa-${props.icon} footer--icon`;

    return (
        <>
            {props.link && 
                <a href={props.link} target="_blank">
                    <i className={classes}></i>
                </a>
            }
        </>
    );
}

export default SocialLink;