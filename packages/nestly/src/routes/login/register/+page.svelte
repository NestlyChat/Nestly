<script lang="ts">
    import Button from "@components/base/Button.svelte";
    import { onMount } from "svelte";
    // Theres probably a better way to do this
    onMount(() => {
    document.title = "Nestly : Register";
    });
</script>


<div class="register-page">
    <div class="register-card">
      <div class="register-header">
        <div class="register-logo">
          <img src="../static/svgs/iconwithnestlykey.svg" alt="Nestly Logo" width="160">
        </div>
        <h1 class="register-title">Register with Nestly Chat!</h1>
        <p class="register-subtitle">Create your account to get started</p>
      </div>
      
      <form class="register-form" on:submit|preventDefault>
        <div class="form-section">
          <h2 class="section-title">Account Information</h2>
          
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
                placeholder="Enter your email"
                
                required
                class="form-input"
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <div class="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                id="username"
                type="text"
                placeholder="Choose a username"

                required
                class="form-input"
              />
            </div>
          </div>
        </div>
        
        <div class="form-divider">
          <span>Security</span>
        </div>
        
        <div class="form-section">
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
                placeholder="Create a password"

                required
                class="form-input"
              />
            </div>
          </div>
          
          <div class="form-group">
            <!-- <label for="confirm-password" class="form-label">Confirm Password</label> -->
            <div class="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"

                required
                class="form-input"
              />
            </div>
            <p class="input-hint">Password must be at least 8 characters</p>

          </div>
        </div>
        
        <!-- {#if errorMessage}
          <div class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="error-icon">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        {/if} -->
        
        <div class="terms-agreement">
          <input type="checkbox" id="terms" class="checkbox" required />
          <label for="terms" class="checkbox-label">
            I agree to the <a href="/terms" class="terms-link">Terms of Service</a> and <a href="/privacy" class="terms-link">Privacy Policy</a>
          </label>
        </div>
        
        <div class="button-container">
          <button 
            type="button" 
            class="btn btn-primary" 

          >
            <!-- <span>{isLoading ? "Creating Account..." : "Create Account"}</span> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
      
      <div class="register-footer">
        <p class="login-prompt">Already have an account?</p>
        <a href="/login" class="login-link">
          <span>Log in</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="login-icon">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
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
  
    .register-page {
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
      padding: 2rem 0;
    }
  
    .register-card {
      width: 100%;
      max-width: 500px;
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
  
    .register-header {
      padding: 2rem 2rem 1.5rem;
      text-align: center;
      border-bottom: 1px solid var(--surface0);
    }
  
    .register-logo {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
  
    .register-title {
      color: var(--primary-accent);
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  
    .register-subtitle {
      color: var(--subtext1);
      font-size: 1rem;
    }
  
    .register-form {
      padding: 1.5rem 2rem;
    }
  
    .form-section {
      margin-bottom: 1.5rem;
    }
  
    .section-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--lavender);
      margin-bottom: 1rem;
    }
  
    .form-divider {
      position: relative;
      text-align: center;
      margin: 0.5rem 0;
    }
  
    .form-divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--surface0);
      z-index: 1;
    }
  
    .form-divider span {
      position: relative;
      display: inline-block;
      padding: 0 1rem;
      background-color: var(--background-tertiary);
      color: var(--subtext0);
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 2;
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
  
    .input-hint {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: var(--subtext0);
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
  
    .terms-agreement {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
  
    .checkbox {
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid var(--surface1);
      border-radius: 4px;
      background-color: var(--background-primary);
      cursor: pointer;
      position: relative;
      margin-top: 0.2rem;
    }
  
    .checkbox:checked {
      background-color: var(--primary-accent);
      border-color: var(--primary-accent);
    }
  
    .checkbox:checked::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 6px;
      width: 4px;
      height: 8px;
      border: solid var(--background-primary);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  
    .checkbox-label {
      font-size: 0.9rem;
      color: var(--subtext1);
      line-height: 1.5;
    }
  
    .terms-link {
      color: var(--primary-accent);
      text-decoration: none;
      transition: all 0.2s ease;
    }
  
    .terms-link:hover {
      text-decoration: underline;
    }
  
    .button-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
  
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
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
  
    .register-footer {
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--surface0);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
  
    .login-prompt {
      color: var(--subtext1);
      font-size: 0.9rem;
    }
  
    .login-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-accent);
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }
  
    .login-link:hover {
      color: var(--sapphire);
    }
  
    .login-icon {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 576px) {
      .register-card {
        margin: 0.5rem;
        max-width: 100%;
      }
  
      .register-header {
        padding: 1.5rem 1.5rem 1rem;
      }
  
      .register-form {
        padding: 1rem 1.5rem;
      }
  
      .button-container {
        justify-content: center;
      }
  
      .btn {
        width: 100%;
      }
    }
  </style>