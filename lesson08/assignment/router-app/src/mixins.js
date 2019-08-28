export default {
  methods: {
    // Applies/removes newClass to element depending on isActive value
    toggle() {
      if (this.isActive = !this.isActive) {
        // console.log(this.TeamCard.id);
        document.getElementById(this.TeamCard.id).classList.add('newClass')
      } else {
        document.getElementById(this.TeamCard.id).classList.remove('newClass')
      }
    }
  }
}