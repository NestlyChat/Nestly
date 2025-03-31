
<script lang="ts">
    import Button from "@components/base/Button.svelte";
    import { onMount } from "svelte";
    // Theres probably a better way to do this
    onMount(() => {
    document.title = "Nestly : Login";
    });
</script>

<div class="appBase">
    <div class="loginContainer">
    <div class="loginHeader">
        <div class="loginLogo">
            <img src="static/svgs/iconwithnestlykey.svg" alt="home logo" width="200px">
        </div>
        <form class="loginForm">
            <h3 class="loginGreeting">Welcome to Nestly Chat!</h3>
            <div class="loginFormContainer">
                <label>
                <input type="text" placeholder="Email or Username" required />
                </label>
                <label>
                <input type="password" placeholder="Password" required />
                </label>
                <div class="passResetButton">
                    <a href="login">Forgot your Password?</a>
                    <!-- reference is a temporary placeholder -->
                </div>
            </div>
            <div class="loginButtonContainer" style="display: flex">
                <Button
                text="Login"
                    rightIcon={{
                        dPath: "M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z",
                        viewBox: "0 0 24 24",
                    }}
                    size="16"
                />
                <Button
                text="Register"
                    rightIcon={{
                        dPath: "M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z",
                        viewBox: "0 0 24 24",
                    }}
                    size="16"
                />
            </div>
        </form>
    </div>    
    </div>
</div>



<style>
    body,
    html {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        color: var(--font-color);
    }

    .appBase {
        position: absolute;
        width: 100%;
        background-color: var(--background-tertiary);
        height: 100%;
    }

    .loginLogo {
        justify-self: center;
        margin: 20px;
    }

    .loginGreeting {
        text-align: center;
        font-size: xx-large;
    }

    .loginFormContainer {
        margin-bottom: 5px;
    }

    .loginForm {
        background: var(--background-secondary);
        max-width: 400px;
        width: 55%;
        color: var(--text);
        padding: 10px;
        border-radius: 8px;
        justify-self: center;
    }

    label {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 10px;
    }

    input {
        transition: border ease 0.2s;
        background-color: var(--background-primary);
        width: 100%;
        border-radius: 8px;
        border-color: transparent;
        height: 52px;
        border: 1px solid transparent;
        border-bottom: 2px solid var(--primary-accent)!important;
        &:hover {
            border: 1px solid var(--primary-accent);
        }
        &:focus {
            border: 1px solid var(--mauve);
        }
    }

    .passResetButton {
        color: var(--primary-accent);
        text-align: right;
        font-size: smaller;
        text-decoration: underline;
        margin-right: 10px;
        margin-top: -10px;
        margin-bottom: 10px;
    }

    .loginButtonContainer {
        border-top: 1px solid var(--primary-accent);
        padding: 10px;
        padding-top: 15px;
        gap: 15px;
        justify-content: space-evenly;
    }
</style>