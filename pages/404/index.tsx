import Head from 'next/head';
import React from 'react'
import styles from './index.module.css';
function NotFound() {
  return (
    <section className='min-vh-100 d-flex align-items-center justify-content-center'>
      <Head>
        <title>صفحه ای یافت نشد</title>
      </Head>
        <div className={styles.notfound}>
            <h1>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
            <h4>صفحه مورد نظر شما یافت نشد</h4>
        </div>
    </section>
  )
}

export default NotFound