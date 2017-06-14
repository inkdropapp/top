import React, { Component } from 'react'
import './security-section.scss'
import Article from './article'

export default class SecuritySection extends Component {
  render () {
    return (
      <Article className='security-section'>
        <a name='security' />
        <header>
          <h2>Seamless Security</h2>
          <p>Inkdrop protects your data without the headaches.</p>
        </header>
        <section className='ui container'>
          <hr className='separator' />
          <div className='ui two column stackable grid'>
            <div className='column secure-database-image' />
            <div className='column'>
              <h3><i className='check circle icon' /> Transport Encryption</h3>
              <p className='text'>
                Inkdrop uses industry standard encryption to protect your data in transit.
                This is commonly referred to as transport layer security (“TLS”)
                or secure socket layer (“SSL”) technology.
              </p>
              <h3><i className='check circle icon' /> Data at Rest Encryption</h3>
              <p className='text'>
                Having data encrypted will make it almost impossible for someone to access
                or steal a hard disk and get access to the original data.
                All your notes stored on disk in the Inkdrop database will be encrypted
                with a common key which is a 256-bit AES key generated
                when you sign up to Inkdrop.
                We use this key, along with an initialization vector,
                to encrypt your data in GCM (Galois/Counter Mode).
                The key is also encrypted while stored on disk, with a 256-bit AES key
                derived with PBKDF2 from your login password.
              </p>
            </div>
          </div>
          <hr className='separator' />
          <div className='ui warning message'>
            <p>
              We never store a copy of your common key without encryption and
              don’t use any escrow mechanism to recover your encrypted data.
              This means that if you forget your login password,
              we cannot recover your data and we can&apos;t even reset your password.
            </p>
          </div>
        </section>
      </Article>
    )
  }
}
