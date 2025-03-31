<div class="landingPage">
    <div class="landingPageHeader">
        <div class="nestlyLogo">
            <img src="static/svgs/iconwithnestlykey.svg" alt="home logo" width="170px">
        </div>
        <nav class="landingNavigation">
            <a href="/">
                <div class="websiteNavigationTab websiteCurrentTab">
                <li>Home</li>
                </div>
            </a>
            <a href="/">
                <div class="websiteNavigationTab">
                <li>Placeholder</li>
                </div>
            </a>
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
            <div class="infoCardHeading1">Who is behind Nestly?</div>
            <div class="infoCardSection">
                Nestly is built by a group of Discord Client Mod developers, who see that it is important to give the user the ability to customize their client. <br />
                We see it as an important core functionality of the app to make the app truly <i>yours</i>. Both in usage and appearance.<br />
                <br />
                The Nestly Team is:<br />
                <div class="teamGallery">
                    <a class="teamMemberClickable" href="https://github.com/caffeinedubz">
                    <div class="teamMember">
                        <img class="teamMemberAvatar" src="https://avatars.githubusercontent.com/u/73869003?v=4" alt="caffeinedubz 's Avatar" width="120px">
                        <div class="teamMemberUsername">Caffeinedubz</div>
                        <div class="teamRoleDescription">Project Lead</div>
                    </div>
                    </a>
                    <a class="teamMemberClickable" href="https://github.com/zrodevkaan/">
                    <div class="teamMember">
                        <img class="teamMemberAvatar" src="https://avatars.githubusercontent.com/u/90235641?v=4" alt="zrodevkaan's Avatar" width="120px">
                        <div class="teamMemberUsername">zrodevkaan</div>
                        <div class="teamRoleDescription">Backend Lead</div>
                    </div>
                    </a>
                    <a class="teamMemberClickable" href="https://github.com/doggybootsy/">
                    <div class="teamMember">
                        <img class="teamMemberAvatar" src="https://avatars.githubusercontent.com/u/71196819?v=4" alt="DoggyBootsy's Avatar" width="120px">
                        <div class="teamMemberUsername">DoggyBootsy</div>
                        <div class="teamRoleDescription">Project Developer</div>
                    </div>
                    </a>
                    <a class="teamMemberClickable" href="https://github.com/riddim-glitch">
                    <div class="teamMember">
                        <img class="teamMemberAvatar" src="https://api.lanyard.rest/801089753038061669.png" alt="Riddim-GLiTCH's Avatar" width="120px">
                        <div class="teamMemberUsername">Riddim-GLiTCH</div>
                        <div class="teamRoleDescription">Lead UI Designer</div>
                    </div>
                    </a>
                    <a class="teamMemberClickable" href="https://github.com/notiphiliac/">
                    <div class="teamMember">
                        <img class="teamMemberAvatar" src="https://avatars.githubusercontent.com/u/59151989?v=4" alt="Notiphiliac's Avatar" width="120px">
                        <div class="teamMemberUsername">Notiphiliac</div>
                        <div class="teamRoleDescription">Tester, Designer</div>
                    </div>
                    </a>
                </div>
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
        z-index: 1;
    }
    .nestlyLogo {
        padding: 5px;
    }
    .landingNavigation {
        display: flex;
        color: var(--text);
    }
    .websiteNavigationTab {
        color: var(--primary-accent);       
        font-weight: 700;
        margin: 1.2rem 1.2rem;
        margin-bottom: 0;
        position: relative;
        display: inline-block;
    }
    .websiteNavigationTab:after {
        content: '';
        position: absolute;
        /* bottom: -6px; */
        left: 0;
        width: 10px;
        height: 3px;
        background-color: var(--primary-accent);
        transition: width 0.3s ease;
    }

    .websiteCurrentTab:after {
        width: 100%;
    }
    .websiteNavigationTab:hover:after {
        width: 100%;
    }
    .landingNavigation li {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 5px;
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
        color: var(--peach);
        font-weight: bold;
        text-align: center;
        font-size: large;
        margin-bottom: 50px;
    }
    .infoCardHeading1 {
        color: var(--green);
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.8rem;
        margin: 1.2rem 1.2rem;
        margin-bottom: 0;
        position: relative;
        display: inline-block;
    }

    .infoCardHeading1:after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--green);
        transition: width 0.3s ease;
    }

    .infoCardHeading1:hover:after {
        width: 100%;
    }

    .infoCardSection {
        padding: 1rem 1rem;
    }


    .infoCardSection li {
        list-style: none;
        position: relative;
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--sapphire);
        margin: 2rem 0 0.5rem 0;
        padding-left: 2rem;
    }


    .infoCardSection li:after {
        content: '✓';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        color: var(--green);
        font-size: 0.9rem;
    }

    .infoCardSection p {
        margin: 0 0 1.5rem 2rem;
        color: var(--text-color);
        line-height: 1.5;
        font-size: 1rem;
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

    .teamGallery {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }
    .teamMember {
        max-width: 120px;
        transition: all ease 0.2s;
        align-content: center;
        text-align: center;
        background-color: var(--background-primary);
        padding: 5px;
        border: 1px solid var(--primary-accent);
        border-radius: 8px;
        &:hover {
            translate: 0 -3px;
            scale: 1.05;
        }
    }
    .teamMemberUsername {
        border-top: 1px solid var(--primary-accent);
        margin-top: 5px;
        padding-top: 5px;
        font-size: smaller;
        font-weight: bold;
    }
    .teamRoleDescription {
        font-size: small;
    }
</style>