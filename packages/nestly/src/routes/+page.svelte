<div class="landingPage">
    <div class="landingPageHeader">
        <div class="nestlyLogo">
            <img src="static/svgs/iconwithnestlykey.svg" alt="home logo" width="170px">
        </div>
        <nav class="landingNavigation">
            <li><a href="/">Home</a></li>
            <li><a href="/">Placeholder</a></li>
        </nav>
        <a href="login" class="loginButton">
            <div class="loginButtonContainer">
                <div class="loginButtonContents">
                    <p>Log in</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -8 18 24" fill="currentColor" class="size-5">
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                      </svg>                    
                </div>
            </div>
        </a>
    </div>
    <div class="landingContent">
        <div class="landingContentHeader">
            <h1 class="landingGreeter">Welcome to Nestly Chat!</h1>
        </div>
        <div class="landingContentInfoCard">
            <div class="infoCardIntroduction">Nestly Chat is an in-development open-source privacy-focussed user-first chat platform that aims to be an alternative to many similar platforms</div>
            <div class="infoCardSection">Nestly Aims to offer a secure platform to use for Messaging. Whether it be for work or keeping in touch with friends and family.</div>
            <div class="infoCardHeading1">Why use Nestly?</div>
            <div class="infoCardSection">
                <ul>
                    <li>Open-Source</li>
                    <p>Nestly is Completely Open Source, this way, You know exactly how our software operates on your hardware.</p>
                    <li>Privacy First</li>
                    <p>Nestly is designed with Privacy in Mind, making sure that your messages are truly yours.</p>
                    <li>Customizable</li>
                    <p>Nestly easily themable, and extensions can easily be added to enhance the user experience.</p>
                    <li>Lightweight and Fast</li>
                    <p>Nestly does its best to keep bloat down, keeping the experience nice and snappy.</p>
                </ul>
            </div>
        </div>
    </div>
</div>


<style>
    .landingPage {
        position: absolute;
        width: 100%;
        background-color: var(--background-secondary);
    }
    .landingPageHeader {
        position: fixed;
        height: 72px;
        display: flex;
        flex-direction: row;
        background-color: var(--background-primary);
        width: 100%;
        top: 0;
        align-items: center;
    }
    .nestlyLogo {
        padding: 5px;
    }
    .landingNavigation {
        display: flex;
        color: var(--text);
    }
    .landingNavigation li {
        transition: border ease 0.2s;
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 5px;
        border-bottom: 1px solid transparent;
        &:hover {
            border-bottom: 1px solid var(--primary-accent);
        }
    }
    .landingContent {
        margin-top: 70px;
    }
    .landingGreeter {
        color: var(--primary-accent);
        font-weight: bold;
        text-align: center;
        font-size: 50px;
        padding: 100px 20px;
    }
    .landingContentInfoCard {
        justify-self: center;
        height: 100%;
        width: 100%;
        max-width: 90%;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--background-tertiary);
        color: var(--text);
        margin-bottom: 30px;
    }
    .infoCardIntroduction {
        color: var(--red);
        font-weight: bold;
        text-align: center;
        font-size: large;
        margin-bottom: 50px;
    }
    .infoCardHeading1 {
        color: var(--red);
        text-transform: uppercase;
        font-weight: bold;
        font-size: large;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        position: relative;
        display: inline-block;
        &:after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--red);
        }
    }
    .infoCardSection {
        padding: 0 10px;
        li {
            list-style: disc;
            margin-left: 20px;
        }
    }

    .loginButtonContainer {
        transition: border ease 0.2s;
        border: 1px solid transparent;
        position: fixed;
        right: 30px;
        top: 20px;
        color: var(--text);
        background-color: var(--background-tertiary);
        padding: 5px;
        border-radius: 8px;
        &:hover {
            border-bottom: 2px solid var(--primary-accent);
        }
    }
    .loginButtonContents {
        display: inline-flex;
        margin-left: 5px;
    }
</style>