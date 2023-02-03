import React from 'react';
import styles from '../about us/about.module.css'
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import doctor from '../images/doctor.jpg'
import doctor_prod from '../images/doctor_prod2.jpg'

const About = () => {
    return (
        <div className={styles.about}>
            <Card className={styles.about__card}>
                <CardImg alt={"doctor"} src={doctor_prod} className={styles.about__img} />
               <CardBody className={styles.about__cardBody}>
                    <CardTitle className={styles.about__cardTitle}>
                    Более <span style={{color: "#3caaf7"}}>10 лет</span>
                    </CardTitle>
                   <CardTitle className={styles.about__cardTitle2}>
                       опыта в лечении зубов
                   </CardTitle>
                   <div className={styles.about__divider}>
                       ______
                   </div>
                    <CardSubtitle className={styles.about__cardSubtitle}>
                        Ежедневно команда профессионалов доказывает,
                        что стоматологическая помощь должна быть надежной,
                        доступной и быстрой.
                        Мы помогаем людям забыть о проблемах со здоровьем и в полной мере оценить вкус жизни.
                        Экономия времени и четкая организация процесса  - основополагающие принципы нашей работы.
                    </CardSubtitle>
                    <CardSubtitle>
                        В современном мире лечение зубов и особенно лечение
                        каналов зубов под микроскопом является стандартом.
                        Сегодня уже невозможно представить высококачественные стоматологические
                        услуги без применения операционного микроскопа.
                        Однако, такое лечение зубов в России, в частности в нашем городе,
                        пока еще не распространено.
                        Лечение под микроскопом - совершенно новый уровень стоматологического мастерства.
                        Мы можем проводить поистине виртуозное лечение: спасаем самые сложные зубы,
                        качественно лечим кариес и пломбируем каналы.
                        Вам неудачно полечили зуб, в нем снова началось воспаление?
                        Внутри канала обломился инструмент и его не получается извлечь?
                        Ваш стоматолог сказал, что зуб нельзя сохранить, и порекомендовал удаление?
                        Зуб будет спасен!
                    </CardSubtitle>
               </CardBody>
            </Card>
        </div>
    );
};

export default About;