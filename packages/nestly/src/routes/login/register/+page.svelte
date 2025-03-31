<script lang="ts">
    import Button from "@components/base/Button.svelte";
    import { onMount } from "svelte";
    // Theres probably a better way to do this
    onMount(() => {
    document.title = "Nestly : Register";
    });
</script>

<div class="appBase">
    <div class="registerContainer">
    <div class="registerHeader">
        <div class="registerLogo">
            <img src="../static/svgs/iconwithnestlykey.svg" alt="home logo" width="200px">
        </div>
        <form class="registerForm">
            <h3 class="registerGreeting">Register with Nestly Chat!</h3>
            <div class="registerFormContainer">
                <label>
                <input type="text" placeholder="Email" required />
                </label>
                <label>
                <input type="text" placeholder="Desired Username" required />
                </label>
                <div class="registerPassSeperator"></div>
                <label>
                <input type="password" placeholder="Password" required />
                </label>
                <label>
                <input type="password" placeholder="Confirm Password" required />
                </label>
            </div>
            <div class="registerButtonContainer" style="display: flex">
                <Button
                text="Continue"
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

    .registerLogo {
        justify-self: center;
        margin: 20px;
    }

    .registerGreeting {
        text-align: center;
        font-size: xx-large;
    }

    .registerFormContainer {
        margin-bottom: 5px;
    }

    .registerForm {
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

    .registerPassSeperator {
        width: 100%;
        border-top: 1px solid var(--primary-accent);
    }

    .registerButtonContainer {
        padding: 10px;
        justify-self: right;
        width: 150px;
    }
</style>