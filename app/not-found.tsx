import styles from './not-found.module.css';
function NotFound() {
  return (
    <section className='min-vh-100 d-flex align-items-center justify-content-center'>
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