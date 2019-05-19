class View {
  
  render(target, questions) {

    let markup = ``;

    questions.forEach(el => {
      markup += el.that.render();
    })

    target.innerHTML = markup;
  }
}

export default View;
