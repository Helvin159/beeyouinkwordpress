<div class="container " id="contactForm">
<label for="name" class="inputLabels">Full Name: <br>
  <input type="text" class="textFields" id="name" name="name"  required>
</label>
<br>
<label class="inputLabels" for="">Phone Number: <br>
  <input type="tel" class="textFields" id="pNumber" maxlength="10" minlength="9" placeholder="Phone Number" name="pNumber">
</label>
<br>
<label  class ="inputLabels" for="">Email:<span style="color:red;">*</span> <br>
  <input type="email" class="textFields " id="address" placeholder="Email" name="email" required><br>
  <input type="email" class="textFields mt-2" id="confirmEmail" placeholder="Confirm - Email" name="confirmEmail"  required>
  <p style="color:red" class="d-none text-right" id="reConfirm">Email does not match!</p>
</label>
<br>
<div class="container ml-0 pl-0">
  <div class="container ml-0 pl-0">
    <label for="explanation" class="inputLabels">A brief explanation of your tattoo <br>
    <textarea name="explanation" class="descBox" id="explanation" id="" ></textarea>
    </label>
  </div>
  <div class="container ml-0 pl-0">
    <label for="concept" class="inputLabels">An idea or concept of your tattoo <br>
      <textarea name="concept" class="descBox" id="concept"></textarea>
    </label>
  </div>
</div>
<!-- <label for="" class="p-2 inputLabels">A picture of where you'd like the tattoo placed. (Please positition straight towards the camera). 
  <br>
  <input type="file" id="image">
</label> -->
<br>
<label for="" class="inputLabels">For safety reasons, have you been exposed to someone with COVID-19, or been tested? 
  <br>
  <select name="covid"  id="covid">
    <option value="--">--</option>
    <option value="I Don't Know, I haven't been tested.">I Don't Know, I haven't been tested.</option>
    <option value="I have been tested, and I am negative.">I have been tested, and I am negative.</option>
    <option value="I have been tested, and I have Covid-19">I have been tested, and I have Covid-19</option>
  </select>
</label>
<br>
<button id="submit" class="btn btn-md btn-danger my-3 d-none">Submit</button>
</div>

<div class="container text-center p-5 d-none" id="thankYou">
  <h1 class="sedgewick">Thank you for your message, we'll be in touch as soon as possible!</h1>
</div>

<div class="container text-center p-5 d-none" id="sorry">
  <h1 class="sedgewick">No Good, Try Again!</h1>
</div>
