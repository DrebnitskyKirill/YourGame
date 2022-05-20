'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
      return queryInterface.bulkInsert(
        "Questions",
        [
          {
            topic_id: 1,
            question: 'Что является столицей Австралии?',
            answer: 'Канберра',
            questionValue: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 1,
            question: 'Какая страна является самой подверженной землетрясениям страной в мире?',
            answer: 'Япония',
            questionValue: 400,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 1,
            question: 'Как называется самый маленький океан?',
            answer: 'Северный Ледовитый океан',
            questionValue: 600,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 1,
            question: 'Какая река протекает через Париж?',
            answer: 'Сена',
            questionValue: 800,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 1,
            question: 'Высота горы Эверест составляет 29 029 футов. Но знаете ли вы, какая страна претендует на эту всемирно известную достопримечательность?',
            answer: 'Непал',
            questionValue: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 2,
            question: 'Каким был первый полнометражный анимационный фильм?',
            answer: 'Белоснежка и семь гномов',
            questionValue: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 2,
            question: 'Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?',
            answer: 'Красный',
            questionValue: 400,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 2,
            question: 'За какой фильм Том Хэнкс получил свою первую номинацию на премию “Оскар”?',
            answer: 'Большой',
            questionValue: 600,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 2,
            question: 'Кто сыграл детектива Рика Декарда в фильме “Бегущий по лезвию” (1982)?',
            answer: 'Харрисон Форд',
            questionValue: 800,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 2,
            question: 'Этот признанный режиссер, лауреат премии “Оскар”, снял фильмы “Делай ноги”, “Бейб: Поросенок в городе” и “Безумный Макс: Дорога ярости”.',
            answer: 'Джордж Миллер',
            questionValue: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 3,
            question: 'Что является основным источником пищи выдры?',
            answer: 'Рыба',
            questionValue: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 3,
            question: 'Верно или нет? Выдры большую часть времени проводят на суше.',
            answer: 'Верно',
            questionValue: 400,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 3,
            question: 'Сколько существует видов выдр?',
            answer: '13',
            questionValue: 600,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 3,
            question: 'Верно или нет? Выдры родом из Австралии',
            answer: 'Нет',
            questionValue: 800,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 3,
            question: 'Какова средняя продолжительность жизни выдры в дикой природе?',
            answer: '10 лет',
            questionValue: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 4,
            question: 'На железных дорогах Японии эту работу выполняют «толкатели». Чем они занимаются?',
            answer: 'Запихивают людей в вагоны',
            questionValue: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 4,
            question: 'В Юго‑Восточной Азии только эта страна никогда не была ничьей колонией. Недаром её название переводится как «Страна свободных». Назовите её.',
            answer: 'Таиланд',
            questionValue: 400,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 4,
            question: 'В акваторию Чёрного моря эти моллюски пришли из Средиземного и Азовского морей. В позапрошлом веке ими не брезговали лишь аджарские бедняки, ныне этот продукт — деликатес. Назовите его.',
            answer: 'Мидии',
            questionValue: 600,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 4,
            question: 'Название этих бобовых, возможно, связано с греческим словом «паук», ведь сетчатый рисунок на плодах — точь‑в‑точь паутина. Что это за растение?',
            answer: 'Арахис',
            questionValue: 800,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            topic_id: 4,
            question: 'На своём острове этот герой провозгласил свободу вероисповедания. Так, в его владениях мирно уживались протестант, язычник и католик. Назовите его имя.',
            answer: 'О Робинзоне Крузо',
            questionValue: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
