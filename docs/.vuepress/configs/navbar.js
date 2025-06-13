export const navbar =
[
    {
      text: '首页',
      link: '/'
    },
    {
      text: '学习笔记',
      children:[
        {
          text: '学习笔记 - JAVA',
          children: [
            {
              text: '初识JAVA',
              link: '/md/note/java/first/first_001.md'
            },
            {
              text: 'JAVA基础知识',
              link: '/md/note/java/basic/basic_001.md'
            },
            {
              text: '深入理解JVM',
              link: '/md/note/java/jvm/jvm_001.md'
            }
          ]
        },
        {
          text: '学习笔记 - GO',
          children: [
            {
              text: '初识GO语言',
              link: '/md/note/go/first/'
            }
          ]
        }
      ]
    },
    {
      text: '常见问题',
      link: '/md/question/',
      children:[
        {
            text: '什么是全双工、半双工?',
            link: '/md/question/question_002.md'
        }
      ]
    },
    {
      text: '更多',
      children:[
        {
          text: '阿里',
          link: '/md/more/ali/ali_001.md'
        },
        {
          text: '随笔',
          link: '/md/more/essay/essay_001_linux_command.md'
        },
        {
          text: '实操系列',
          link: '/md/more/real-operation/ro_001.md'
        }
      ]
    },
  ]