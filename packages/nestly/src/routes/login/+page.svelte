<script lang="ts">
    import Button from "@components/base/Button.svelte";
    import { onMount } from "svelte";
    import UserStore from "../../stores/users.svelte";

    let email = "";
    let password = "";
    let isLoading = false;
    let errorMessage = "";

    onMount(() => {
        document.title = "Nestly : Login";
    });

    const handleLogin = async () => {
        if (!email || !password) {
            errorMessage = "Please enter both email and password";
            return;
        }

        isLoading = true;
        const success = await UserStore.login(email, password);
        isLoading = false;

        if (success) {
            window.location.href = "/chat";
        } else {
            errorMessage = UserStore.data.error || "Login failed";
        }
    };

    const handleRegister = async () => {
        if (!email || !password) {
            errorMessage = "Please enter both email and password";
            return;
        }

        isLoading = true;
        const success = await UserStore.register(email, password);
        isLoading = false;

        if (success) {
            window.location.href = "/chat";
        } else {
            errorMessage = UserStore.data.error || "Registration failed";
        }
    };
</script>

<div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <div class="login-logo">
          <img src="static/svgs/iconwithnestlykey.svg" alt="Nestly Logo" width="160">
        </div>
        <h1 class="login-title">Welcome to Nestly Chat!</h1>
        <p class="login-subtitle">Sign in to your account or create a new one</p>
      </div>
      
      <form class="login-form" on:submit|preventDefault>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <div class="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              id="email"
              type="email"
              placeholder="Enter your email or username"
              bind:value={email}
              required
              class="form-input"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <div class="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              bind:value={password}
              required
              class="form-input"
            />
          </div>
        </div>
        
        <div class="password-reset">
          <a href="/reset-password" class="reset-link">Forgot your password?</a>
        </div>
        
        {#if errorMessage}
          <div class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="error-icon">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        {/if}
        
        <div class="button-group">
          <button 
            type="button" 
            class="btn btn-primary" 
            on:click={handleLogin} 
            disabled={isLoading}
          >
            <span>{isLoading ? "Loading..." : "Login"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
          </button>
          
          <button 
            type="button" 
            class="btn btn-secondary" 
            on:click={handleRegister} 
            disabled={isLoading}
          >
            <span>{isLoading ? "Loading..." : "Register"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
          </button>
        </div>
      </form>
      
      <div class="login-footer">
        <a href="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="back-icon">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Back to Home</span>
        </a>
      </div>
    </div>
  </div>
  
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    .login-page {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      width: 100%;
      background-color: var(--background-secondary);
      background-image: radial-gradient(
        circle at 15% 50%,
        var(--surface0) 0%,
        transparent 25%
      ), 
      radial-gradient(
        circle at 85% 30%,
        var(--surface0) 0%,
        transparent 25%
      );
    }
  
    .login-card {
      width: 100%;
      max-width: 450px;
      background-color: var(--background-tertiary);
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      margin: 1rem;
      animation: fadeIn 0.5s ease-out;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    .login-header {
      padding: 2rem 2rem 1.5rem;
      text-align: center;
      border-bottom: 1px solid var(--surface0);
    }
  
    .login-logo {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
  
    .login-title {
      color: var(--primary-accent);
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  
    .login-subtitle {
      color: var(--subtext1);
      font-size: 1rem;
    }
  
    .login-form {
      padding: 1.5rem 2rem;
    }
  
    .form-group {
      margin-bottom: 1.25rem;
    }
  
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--subtext0);
    }
  
    .input-wrapper {
      position: relative;
    }
  
    .input-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      color: var(--overlay1);
      pointer-events: none;
    }
  
    .form-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border-radius: 8px;
      border: 2px solid var(--surface0);
      background-color: var(--background-primary);
      color: var(--text);
      font-size: 1rem;
      transition: all 0.3s ease;
    }
  
    .form-input:focus {
      outline: none;
      border-color: var(--primary-accent);
      box-shadow: 0 0 0 3px rgba(137, 180, 250, 0.2);
    }
  
    .form-input::placeholder {
      color: var(--overlay0);
    }
  
    .password-reset {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1.5rem;
    }
  
    .reset-link {
      color: var(--primary-accent);
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
  
    .reset-link:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  
    .error-message {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      margin-bottom: 1.5rem;
      background-color: rgba(243, 139, 168, 0.1);
      border-left: 3px solid var(--red);
      border-radius: 4px;
      color: var(--red);
      font-size: 0.9rem;
    }
  
    .error-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  
    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }
  
    .btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  
    .btn-icon {
      width: 18px;
      height: 18px;
    }
  
    .btn-primary {
      background-color: var(--primary-accent);
      color: var(--background-primary);
    }
  
    .btn-primary:hover:not(:disabled) {
      background-color: var(--sapphire);
      transform: translateY(-2px);
    }
  
    .btn-secondary {
      background-color: transparent;
      border: 2px solid var(--primary-accent);
      color: var(--primary-accent);
    }
  
    .btn-secondary:hover:not(:disabled) {
      background-color: rgba(137, 180, 250, 0.1);
      transform: translateY(-2px);
    }
  
    .login-footer {
      padding: 1rem 2rem;
      border-top: 1px solid var(--surface0);
      text-align: center;
    }
  
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--subtext0);
      font-size: 0.9rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
  
    .back-link:hover {
      color: var(--primary-accent);
    }
  
    .back-icon {
      width: 16px;
      height: 16px;
    }
  
    @media (max-width: 576px) {
      .login-card {
        margin: 0.5rem;
        max-width: 100%;
      }
  
      .login-header {
        padding: 1.5rem 1.5rem 1rem;
      }
  
      .login-form {
        padding: 1rem 1.5rem;
      }
  
      .button-group {
        flex-direction: column;
      }
    }
  </style>
  