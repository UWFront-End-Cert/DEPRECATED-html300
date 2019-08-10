<template>
  <div class="hello">
    <div class="form-group">
      <label for="name">Name</label>
      <input class="form-control" type="text"
      id="name" placeholder="Enter name">
      <label for="last_name">Last Name</label>
      <input class="form-control" type="text"
      id="last_name" placeholder="Enter Last Name">
      <label for="email">Email</label>
      <input class="form-control" type="email"
      id="email" placeholder="Enter email">
      <div class="btn-group">
        <button class="btn btn-outline-primary">
        Click Me</button>
        <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Click on the other button">
          <button class="btn btn-primary" type="submit" disabled>Submit</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-group{
  margin: 100px auto;
  width: 20%;
  text-align: center;
}
button{
  margin: 10px 0;
  

}
.btn-primary{
  pointer-events: none;

}
</style>
