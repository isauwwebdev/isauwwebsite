import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {formatPhoneNumber} from '../Shop/shopTools';

function FormHelper(props) {
  const {type, label, name, datatype, options, value, accept, rows, handleChange, feedback, pattern} = props;
  const handlePhoneInput = (e) => {
    e.target.value = formatPhoneNumber(e.target.value);
    handleChange(e);
  };

  const renderSwitch = (type) => {
    switch (type) {
      case 'select':
        return (
          <Form.Group>
            <FloatingLabel label={label}>
              <Form.Select name={name} value={value} required onChange={(e) => handleChange(e)}>
                {options.map((opt) => {
                  if (opt.value === "default") {
                    return <option selected disabled value="">{opt.text}</option>
                  } else {
                    return <option value={opt.value}>{opt.text}</option>
                  }
                })}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        )
      case 'file':
        return (
          <Form.Group>
            <Form.Control style={{fontFamily: "Open Sans", fontWeight: "300", color: "#212529", display: "none"}} id={name} type="file" name={name} accept={accept} onChange={(e) => handleChange(e)} required />
          </Form.Group>
        )
      case 'textarea':
        return (
          <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control style={{fontSize: "14px"}} as="textarea" name={name} onChange={(e) => handleChange(e)} rows={rows} required />
          </Form.Group>
        )
      default:
        return (
          <Form.Group>
            <FloatingLabel label={label} >
              <Form.Control name={name} type={datatype} onChange={(e) => {datatype === "tel" ? handlePhoneInput(e) : handleChange(e)}} placeholder={label} pattern={pattern} required></Form.Control>
              <Form.Control.Feedback type="invalid">
                {feedback}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        )
    }
  }

  return (
    <div style={{marginBottom: type !== "file" ? "24px" : ""}}>
      {renderSwitch(type)}
    </div>
  )
}

export default FormHelper