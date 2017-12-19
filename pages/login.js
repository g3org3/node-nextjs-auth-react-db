
import { Component } from 'react'
import Layout from '../components/Layout'
import Debug from '../components/Debug'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: '',
        password: ''
      }
    }
  }

  updateFormState(field, e) {
    const { value } = e.target
    const form = Object.assign({}, this.state.form)
    form[field] = value
    this.setState = { form }
  }

  render() {
    const { email, password } = this.state
    const { updateFormState } = this

    return <Layout>
      <h1>Login Page</h1>
      <Debug props={this.state} />
      <input type="text" name="email" onChange={updateFormState.bind(this, 'email')} value={email} />
      <input type="password" name="password" onChange={updateFormState.bind(this, 'password')} value={password} />
      <button type="submit">login</button>
    </Layout>
  }
}

export default Login