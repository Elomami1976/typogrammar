import React, { useEffect } from 'react';

const MailchimpForm: React.FC = () => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script1 = document.createElement('script');
    script1.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Initialize Mailchimp form after validation script loads
    const script2 = document.createElement('script');
    script2.innerHTML = `
      (function($) {
        window.fnames = new Array(); 
        window.ftypes = new Array();
        fnames[0]='EMAIL';ftypes[0]='email';
        fnames[1]='FNAME';ftypes[1]='text';
        fnames[2]='LNAME';ftypes[2]='text';
        fnames[4]='PHONE';ftypes[4]='phone';
        fnames[3]='ADDRESS';ftypes[3]='address';
        fnames[5]='BIRTHDAY';ftypes[5]='birthday';
        fnames[6]='COMPANY';ftypes[6]='text';
      }(jQuery));
      var $mcj = jQuery.noConflict(true);
    `;
    script2.async = true;
    
    script1.onload = () => {
      document.body.appendChild(script2);
    };

    return () => {
      // Cleanup scripts on unmount
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 sm:my-8 md:my-12">
      {/* Custom TypoGrammar-style CSS - No Mailchimp default styles */}
      <style type="text/css">
        {`
          #mc_embed_signup {
            width: 100%;
          }
          #mc_embed_signup h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: rgb(15 23 42);
            text-align: center;
          }
          .dark #mc_embed_signup h2 {
            color: rgb(248 250 252);
          }
          #mc_embed_signup .indicates-required {
            font-size: 0.875rem;
            color: rgb(100 116 139);
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .dark #mc_embed_signup .indicates-required {
            color: rgb(148 163 184);
          }
          #mc_embed_signup .asterisk {
            color: rgb(239 68 68);
            font-weight: 600;
          }
          #mc_embed_signup .mc-field-group {
            margin-bottom: 1.5rem;
          }
          #mc_embed_signup label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: rgb(51 65 85);
            margin-bottom: 0.5rem;
          }
          .dark #mc_embed_signup label {
            color: rgb(226 232 240);
          }
          #mc_embed_signup input[type="text"],
          #mc_embed_signup input[type="email"] {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border: 2px solid rgb(226 232 240);
            border-radius: 0.5rem;
            background: white;
            color: rgb(15 23 42);
            transition: all 0.2s ease;
            outline: none;
          }
          #mc_embed_signup input[type="text"]:focus,
          #mc_embed_signup input[type="email"]:focus {
            border-color: rgb(59 130 246);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          .dark #mc_embed_signup input[type="text"],
          .dark #mc_embed_signup input[type="email"] {
            background: rgb(51 65 85);
            border-color: rgb(71 85 105);
            color: rgb(248 250 252);
          }
          .dark #mc_embed_signup input[type="text"]:focus,
          .dark #mc_embed_signup input[type="email"]:focus {
            border-color: rgb(59 130 246);
            background: rgb(51 65 85);
          }
          #mc_embed_signup .button {
            width: 100%;
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            background: linear-gradient(to right, rgb(59 130 246), rgb(37 99 235));
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          #mc_embed_signup .button:hover {
            background: linear-gradient(to right, rgb(37 99 235), rgb(29 78 216));
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
          }
          #mc_embed_signup .button:active {
            transform: translateY(0);
          }
          #mc_embed_signup .response {
            padding: 0.75rem 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
          }
          #mc_embed_signup #mce-error-response {
            background: rgb(254 226 226);
            color: rgb(153 27 27);
            border: 1px solid rgb(252 165 165);
          }
          .dark #mc_embed_signup #mce-error-response {
            background: rgb(127 29 29);
            color: rgb(254 226 226);
            border-color: rgb(185 28 28);
          }
          #mc_embed_signup #mce-success-response {
            background: rgb(220 252 231);
            color: rgb(22 101 52);
            border: 1px solid rgb(134 239 172);
          }
          .dark #mc_embed_signup #mce-success-response {
            background: rgb(20 83 45);
            color: rgb(220 252 231);
            border-color: rgb(34 197 94);
          }
        `}
      </style>
      
      <div id="mc_embed_signup" className="bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <form 
          action="https://typogrammar.us17.list-manage.com/subscribe/post?u=ee42784a513284b7a868b732c&amp;id=d0f673c7df&amp;f_id=002cb7e3f0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Join 1,000+ Learners Getting Grammar Made Simple</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input 
                type="email" 
                name="EMAIL" 
                className="required email" 
                id="mce-EMAIL" 
                defaultValue="" 
                required 
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">
                First Name <span className="asterisk">*</span>
              </label>
              <input 
                type="text" 
                name="FNAME" 
                className="required text" 
                id="mce-FNAME" 
                defaultValue="" 
                required 
                placeholder="John"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input 
                type="text" 
                name="LNAME" 
                className="text" 
                id="mce-LNAME" 
                defaultValue="" 
                placeholder="Doe"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">
                Phone Number <span className="asterisk">*</span>
              </label>
              <input 
                type="text" 
                name="PHONE" 
                className="REQ_CSS" 
                id="mce-PHONE" 
                defaultValue="" 
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input 
                type="text" 
                name="b_ee42784a513284b7a868b732c_d0f673c7df" 
                tabIndex={-1} 
                defaultValue="" 
              />
            </div>
            <div className="clear">
              <input 
                type="submit" 
                name="subscribe" 
                id="mc-embedded-subscribe" 
                className="button" 
                value="Subscribe" 
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;
