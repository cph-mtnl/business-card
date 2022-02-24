const SocialLink = (props) => {
    const classes = `fab fa-${props.icon} footer--icon`;

    return (
        <i className={classes}></i>
    );
}

export default SocialLink;