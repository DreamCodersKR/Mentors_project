<template>
  <div class="login-container">
    <div class="logo-container" @click="goToHome">
      <img src="@/assets/logo.png" alt="Mentors Logo" class="logo" />
      <h1 class="logo-text">Mentors</h1>
    </div>

    <div class="form-group">
      <input
        type="email"
        v-model="email"
        placeholder="이메일을 입력해주세요."
        class="input-field"
      />
    </div>

    <div class="form-group">
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요."
        class="input-field"
      />
    </div>

    <!-- 로그인 상태 유지 체크박스 -->
    <div class="form-group checkbox-container">
      <label class="custom-checkbox">
        <input type="checkbox" v-model="rememberMe" />
        <span class="checkmark"></span>
        로그인 상태 유지
      </label>
    </div>

    <!-- 로그인 버튼 -->
    <button class="login-btn" @click="login">로그인</button>

    <!-- 하단 링크들 -->
    <div class="footer-links">
      <router-link to="/find-id" class="footer-link">아이디 찾기</router-link>
      <span> | </span>
      <router-link to="/find-password" class="footer-link"
        >비밀번호 찾기</router-link
      >
      <span> | </span>
      <router-link to="/signup" class="footer-link">회원가입</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert("이메일과 비밀번호를 입력해주세요.");
        return;
      }

      // 로그인 로직 처리
      console.log("로그인 시도:", {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });
    },
    goToHome() {
      this.$router.push("/"); // 로고를 클릭하면 홈으로 이동
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  text-align: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}

.logo {
  width: 50px; /* 로고 크기 조정 */
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  font-family: "Arial", sans-serif;
  margin-left: -5px;
}

/* 입력 필드 스타일 */
.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

/* 로그인 상태 유지 커스텀 체크박스 */
.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: #eee;
  border-radius: 4px;
  display: inline-block;
  margin-right: 10px;
  position: relative;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #a7bdfb;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* 로그인 버튼 */
.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #8d8df5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.login-btn:hover {
  background-color: #7582d5;
}

/* 하단 링크들 */
.footer-links {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  margin-left: -10px;
}

.footer-link {
  color: #666;
  text-decoration: none;
  margin: 0 5px;
}

.footer-link:hover {
  text-decoration: underline;
}

/* 체크박스 */
.form-group {
  text-align: left;
}
</style>
