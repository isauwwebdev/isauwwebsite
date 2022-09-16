export const createFormData = (order) => {
  var formData = new FormData();
  formData.append('id', order.id);
  formData.append('firstName', order.firstName);
  formData.append('lastName', order.lastName);
  formData.append('email', order.email);
  formData.append('phone', order.phone);
  formData.append('venmo', order.venmo);
  formData.append('date', order.date);
  formData.append('totalPrice', order.totalPrice);
  var result = "";
  order.cartItems.forEach((item) => {
    if (result !== "") {
      result += "\n"
    }
    result += item.qty + "x " + item.name;
    if (item.selected) {
      result += " (" + item.selected + ")";
    }
  });
  formData.append('cartItems', result);
  formData.append('pickup', order.pickup);

  return formData;
};

export const formatPhoneNumber = (value) => {
  // if input value is falsy e.g. if the user deletes the input, then just return
  if (!value) {
    return value;
  }

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you format the area code too early
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }

  // if phoneNumberLength is greater than 4 and less than 7 
  // we start to return the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater than seven, 
  // we add the last bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const generateOrderHTML = (order) => {
  return (
    <div>
      <div className="row"><h4 style={{fontWeight: "600"}}>Order # {order.id}</h4></div>
      <div className="row" style={{marginTop: "20px"}}><h3 style={{fontWeight: "700", marginBottom: "0"}}>Your Purchase</h3></div>
      {order.cartItems.map((x) => (
        <div className="row">
          <div className="col-9">{x.name} {x.selected && ("(" + x.selected + ")")} x {x.qty}</div>
          <div className="col-3" style={{textAlign: "right"}}>${(x.price * x.qty).toFixed(2)}</div>
        </div>
      ))}

      <hr style={{margin: "24px 0 6px"}} />
      <div className="row" style={{fontWeight: "600"}}>
        <div className="col-6">Total</div>
        <div className="col-6" style={{textAlign: "right"}}>${order.totalPrice}</div>
      </div>
      <hr style={{margin: "6px 0 48px"}} />

      <div style={{fontSize: "12px"}}>
        <div className="row"><div className="col">Name: {order.firstName} {order.lastName}</div></div>
        <div className="row"><div className="col">Email: {order.email}</div></div>
        <div className="row"><div className="col">Venmo: {order.venmo}</div></div>
        <div className="row"><div className="col">Phone: {order.phone}</div></div>
        <div className="row"><div className="col">Date: {(order.date).split(", ").slice(0, 1)}</div></div>
        <div className="row"><div className="col">Time: {(order.date).split(", ").slice(1)}</div></div>
      </div>
    </div>
  );
};