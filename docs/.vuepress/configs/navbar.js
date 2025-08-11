export const navbar =
[
    {
      text: '首页',
      link: '/'
    },
    {
      text: '面试',
      link: '/md/interview/',
    },
    {
      text: '算法',
      link: '/md/algorithm/',
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
            },
            {
              text: 'JAVA代码细节',
              link: '/md/note/java/detail/detail_001.md'
            }
          ]
        },
        {
          text: '学习笔记 - GO',
          children: [
            {
              text: 'GoLang 基础',
              link: '/md/note/go/basic/golang_001.md'
            }
          ]
        },
        {
          text: '学习笔记 - 响应式编程',
          children: [
            {
              text: '第一章: 走进响应式编程',
              link: '/md/note/reactive/reactive_001.md'
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
            text: 'intellj idea BUG',
            link: '/md/question/idea/question_idea_001.md'
        },
        {
            text: '网络相关知识',
            link: '/md/question/net/question_net_001.md'
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