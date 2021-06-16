import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>
            your submission was recieved !
            <Link to="/" className="btn">
              back home
            </Link>
          </h2>
        </div>
      </section>
    </Layout>
  )
}

export default Success
