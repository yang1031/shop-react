import React from 'react'
import styles from './shopList.module.scss';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom'
const { Search } = Input;

class ShopList extends React.Component {
  render () {
    return (
      <div className={styles.shopContainer}>
        <div className={styles.shopHead}>
          <div>
            <div className={styles.title}>迎客吧</div>
            <div className={styles.label}>选择店铺</div>
          </div>
          <div>
            <div className={styles.user}>+86-12345678911</div>
            <Link to="/login">退出</Link>
          </div>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.head}>
            <div className={styles.user}>
              <i className="iconfont iconuser"></i>
              <div className={styles.userInfo}>
                <div className={styles.name}>12345678911</div>
                <div>+86-12345678911 <Link to="">设置</Link></div>
              </div>
            </div>
            <Button className={styles.createBtn} type="primary">创建店铺</Button>
          </div>
          <div className={styles.storeContainer}>
            <div className={styles.typeLine}>
              <ul className={styles.storeType}>
                <li>所有店铺</li>
                <li>微商城</li>
                <li>零食</li>
                <li>美业</li>
                <li>供货</li>
              </ul>
              <div className={styles.search}>
                <Search
                  placeholder="搜索店铺"
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>
            <ul className={styles.storeList}>
              <li className={styles.storeItem}>
                <div className={styles.name}>洋洋的小店</div>
                <p>主体信息: 未认证</p>
                <p>店铺状态: 已打烊</p>
                <div className={styles.operate}>
                  <div className={styles.btn}>
                    <a href="">修改</a>
                    <a href="">删除</a>
                  </div>
                  <div className={styles.type}>微商城</div>
                </div>
              </li>
            </ul>
            <div className={styles.pagination}>共 1 条, 每页 48 条</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopList
