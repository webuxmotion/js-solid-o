class QuestionCreator {

  constructor(params) {
    this.params = params;
  }

  renderInput() {
    throw "Not implemented";
  } 

  render() {
    const questionMarkup = `
      <div class="question">
        <div class="question-label">${this.params.label}</div>
        ${this.renderInput()}
      </div>
    `;
    return questionMarkup;
  }

  setRenderInput(func) {
    this.renderInput = func;
  }
}

export default QuestionCreator;
