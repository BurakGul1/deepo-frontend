import React from "react";
import "./login.css"

export default function Login() {
  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Giriş yap
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Kayıt ol
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" />
                <label for="check">
                  <span className="icon"></span> Beni hatırla
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Şifremi unuttum</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <p className="yazı">Neden üye olmalıyım</p>
                <ul className="liste">
                  <li>Fiyat alarmı kur ve değişimlerden haberdar ol</li>
                  <li>Favori listelerini oluştur</li>
                  <li>Oluşturduğun listeleri paylaş</li>
                </ul>
              </div>
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  e-posta
                </label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Tekrar şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>

              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Zaten üye misiniz ?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
