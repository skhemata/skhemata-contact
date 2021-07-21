import { SkhemataBase, html, CSSResult, property } from '@skhemata/skhemata-base';
import { 
  SkhemataForm,
  SkhemataFormTextbox,
  SkhemataFormTextarea,
  SkhemataFormButton
} from '@skhemata/skhemata-form';
import { SkhemataContactStyles } from './styles/SkhemataContactStyles';

export class SkhemataContact extends SkhemataBase {
  static get styles(): CSSResult[] {
    return <CSSResult[]> [
      ...super.styles,
      SkhemataContactStyles
    ]
  }

  static get scopedElements() {
    return {
      'sk-form': SkhemataForm,
      'sk-textbox': SkhemataFormTextbox,
      'sk-textarea': SkhemataFormTextarea,
      'sk-button': SkhemataFormButton,
    }
  }

  @property({ type: String, attribute: 'post-url' })
  postUrl = '';

  @property({ type: Boolean})
  showThankYou = false;

  @property({ type: String})
  title = 'Get In Touch';

  @property({ type: String})
  subtitle = 'We\'d love to hear from you!';

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(this.postUrl,{
        method: 'post',
        body: JSON.stringify(e.detail.data),
    })
    .then(res => res.json())
    .then(data => {
      this.showThankYou = true;
        setTimeout(() => {
          this.showThankYou = false
      }, 5000)
    });
  }

  render() {

    const thankYouMessage = html`
    <div class="block thank-you">
      <div class="notification has-text-centered">
        <button class="delete" @click=${() => {this.showThankYou = false}}></button>
        Thank you for your submission, we will get back to you soon
      </div>
    </div>
    `;

    return this.showThankYou === true ? 
    thankYouMessage
    :
    html`
    <div class="panel contact-panel">
      <div class="panel-block panel-block-heading">
        <div class="panel-heading white">
          <p class="title">
            ${this.title}
          </p>
          <p class="subtitle">
            ${this.subtitle}
          </p>
        </div>
      </div>
      <div class="panel-block panel-block-content">
        <sk-form @submit="${this.handleSubmit}">
          <div class="columns">
            <div class="column">
              <sk-textbox label="Full Name" placeholder="Your Name" name="name" required></sk-textbox>
            </div>
            <div class="column">
              <sk-textbox label="Email" placeholder="Your Email" name="email" type="email" required></sk-textbox>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <sk-textbox label="How did you hear about us?" placeholder="Please let us know" name="source"></sk-textbox>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <sk-textarea label="Message" placeholder="Write your message" name="description" required></sk-textarea>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
              <sk-button type="submit" color="#00b4ad" title="SEND MESSAGE"></sk-button>
                </div>
              </div>
            </div>
          </div>
        </sk-form>
      </div>
    </div>
    `;
  }
}
