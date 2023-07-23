<div className="container">

    <div className="content">
        <div className="first-column">
            <h2 className="title title-primary">Welcome back!</h2>
            <p className="description description-primary">To stay connected with us,</p>
            <p className="description description-primary">please login with your personal info.</p>
            <button id="signin" className="btn btn-primary">Sign in</button>
        </div>
        <div className="second-column">
            <h2 className="title title-second">Create Account</h2>
            <div className="social-media">
                <ul className="list-social-media">
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fab fa-facebook-f"></i>
                        </li>
                    </a>
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fab fa-google-plus-g"></i>
                        </li>
                    </a>
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </li>
                    </a>
                </ul>
            </div>
            {/* <!-- social media --> */}
            <p className="description description-second">Or use your email for registration:</p>
            <form className="form">
                <label className="label-input">
                    <i className="far fa-user icon-modify"></i>
                    <input type="text" placeholder="Name" />
                </label>

                <label className="label-input">
                    <i className="far fa-envelope icon-modify"></i>
                    <input type="email" placeholder="Email" />
                </label>

                <label className="label-input">
                    <i className="fas fa-lock icon-modify"></i>
                    <input type="password" placeholder="Password" />
                </label>

                <button className="btn btn-second">Sign up</button>
            </form>
        </div>
        {/* <!-- second column --> */}
    </div>



</div>