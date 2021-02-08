import React from "react"
import cn from "classnames"
import styles from "./profile-box.module.css"
import Photo from "./photo"
import TextBody from "./text-body"
import { ArrowBottom } from "./icons"
import Button from "./button"

function ProfileBox({ name="Sakir Tufan", slug="tufan_sakir"}) {
  return (
    <Button  className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
      <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon} />
    </Button>
  )
}

export default ProfileBox;