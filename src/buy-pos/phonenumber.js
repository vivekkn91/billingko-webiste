import React from "react";

export default function PhoneNumber() {
  return (
    <form name="contact" method="post" className="form-containerx">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input
          type="text"
          id="restaurantName"
          name="restaurantName"
          placeholder="Restaurant Name"
          required
        />
      </p>
      <p>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
