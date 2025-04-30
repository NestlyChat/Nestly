<script lang="ts">
    import ServerNavigation from "@components/layout/ServerNavigations.svelte";
</script>

<div class="appBase">
    <ul class="serverNav">
        <div class="nestHome"></div>
        <ServerNavigation />
        <div class="nestSpace"></div>
    </ul>

    <div class="appHeader">
        <div class="nestTitle">
            <div class="nestSpaceDescription"></div>
        </div>
        <div class="primaryUser">
            <div class="nestUserAvatar">
                <div class="nestUserAvatarImage"></div>
            </div>
            <div class="nestUserName">
                <div class="nestUserStatus">
                    <div class="nestUserStatusIcon"></div>
                    <div class="nestUserStatusText"></div>
                </div>
            </div>
            <div class="nestUserSettingsArrow"></div>
        </div>
    </div>

    <div class="chatContent">
        <div class="channelList"></div>
        <div class="nestChatHistory"></div>
        <div class="chatInput">
            <div
                    class="chatForm"
                    role="textbox"
                    aria-multiline="true"
                    aria-label="Type a message..."
                    contenteditable="true"
                    spellcheck="false"
                    aria-autocomplete="list"
            >
                <input
                        type="text"
                        class="chatInputField"
                        placeholder="Type a message..."
                />
            </div>
            <button type="submit" class="chatSendButton" >Send</button>
        </div>
    </div>

    <div class="nestMemberList"></div>
</div>

<!-- Thank you to the catppuccin team for the color scheme -->

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

    .appHeader {
        position: fixed;
        height: 72px;
        display: flex;
        flex-direction: row;
        background-color: var(--background-secondary);
        width: 100%;
        top: 0;
        align-items: center;
    }

    .appHeader::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--background-primary);
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .chatContent {
        position: absolute;
        top: 72px;
        bottom: 72px;
        overflow-y: auto;
        background-color: var(--background-secondary);
        padding-left: 16px;
        padding-right: 16px;
        left: 244px;
        width: calc(100% - 317px);
        display: flex;
    }

    .chatInput {
        background-color: transparent;
        position: sticky;
        top: calc(100% - 54px);
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 48px;
        width: calc(100% - 48px);
        border-radius: 8px;
        color: var(--text);
    }

    .chatInputField {
        transition: border ease 0.2s;
        background-color: var(--background-primary);
        width: 100%;
        margin-right: 10px;
        border-radius: 8px;
        border-color: transparent;
        height: 52px;
        transition: border ease 0.2s;
        border: 1px solid transparent;

        &:hover {
            border: 1px solid var(--primary-accent);
        }

        &:focus {
            border: 1px solid var(--red);
        }
    }

    .chatSendButton {
        transition: border ease 0.2s;
        position: sticky;
        height: 52px;
        width: 52px;
        background-color: var(--background-primary);
        border-radius: 8px;
        align-content: flex-end;
        border: 1px solid transparent;

        &:hover {
            border: 1px solid var(--primary-accent);
        }
    }

    .chatForm {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }

    .primaryUser {
        background-color: var(--background-primary);
        color: var(--font-color);
        border-radius: 8px;
        width: 240px;
        display: flex;
        height: 52px;
        position: relative;
        margin-left: auto;
        margin-right: 8px;
    }
</style>
