export const sidebar =
{
    '/md/note/java/':[
        {
            text: '初识JAVA',
            collapsible: true,
            children: [
                {
                    text: '初识JAVA - Java简史',
                    link: '/md/note/java/first/first_001.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - Java体系结构',
                    link: '/md/note/java/first/first_002.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - Java特性和优势',
                    link: '/md/note/java/first/first_003.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - 跨平台性的原理',
                    link: '/md/note/java/first/first_004.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - JDK的下载以及环境配置',
                    link: '/md/note/java/first/first_005.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - Hello World',
                    link: '/md/note/java/first/first_006.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - IDE工具 - Intellj idea',
                    link: '/md/note/java/first/first_007.md',
                    collapsible: false
                }
            ]
        },
        {
            text: 'JAVA基础知识',
            collapsible: true,
            children: [
                {
                    text: 'JAVA基础知识 - 注释',
                    link: '/md/note/java/basic/basic_001.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础知识 - 基础概念',
                    link: '/md/note/java/basic/basic_002.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础知识 - 基本数据类型',
                    link: '/md/note/java/basic/basic_003.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础知识 - 运算符',
                    link: '/md/note/java/basic/basic_004.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础知识 - 流程控制',
                    link: '/md/note/java/basic/basic_005.md',
                    collapsible: false
                },
            ]
        },
        {
            text: '深入理解JVM',
            collapsible: true,
            children: [
                {
                    text: '深入理解JVM - ',
                    link: '/md/note/java/jvm/jvm_001.md',
                    collapsible: false
                }
            ]
        }
    ],
    '/md/note/go/':[
        {
            text: '初识GO',
            collapsible: true,
            children: [
                {
                    text: 'GoLang 基础',
                    link: '/md/note/go/basic/',
                    collapsible: false,
                    children: [
                        {
                            text: '第一章: 走进GoLang',
                            link: '/md/note/go/basic/golang_001.md'
                        }
                    ]
                }
            ]
        }
    ],
    '/md/question/':[
        {
            text: '常见问题',
            collapsible: true,
            collapsible: true,
            children: [
                {
                    text: 'Intellj Idea 问题',
                    collapsible: true,
                    children:[
                        {
                            text: '【Intellj Idea】idea启动时报错java: Internal error in the mapping processor: java.lang.NullPointerException',
                            link: '/md/question/question_idea_001.md',
                            collapsible: true
                        }
                    ]
                },
                {
                    text: 'Intellj Idea 问题',
                    collapsible: true,
                    children: [
                        {
                            text: '什么是全双工、半双工?',
                            link: '/md/question/question_net_001.md',
                            collapsible: true
                        }
                    ]
                }
            ]
        }
    ],
    '/md/more/': [
        {
            text: '更多',
            collapsible: true,
            children: [
                {
                    text: '阿里',
                    collapsible: true,
                    children: [
                        {
                            text: 'Ali CentOS 7 Minimal的镜像下载',
                            link: '/md/more/ali/ali_001.md',
                            collapsible: false,
                        },
                        {
                            text: 'Ali CentOS 7 Minimal 新手教程引导',
                            link: '/md/more/ali/ali_002.md',
                            collapsible: false
                        }
                    ]
                },
                {
                    text: '随笔',
                    collapsible: true,
                    children: [
                        {
                            text: '随笔 - Linux命令',
                            link: '/md/more/essay/essay_001_linux_command.md',
                            collapsible: false
                        },
                        {
                            text: '随笔 - vuepress2.x',
                            link: '/md/more/essay/essay_002_vuepress.md',
                            collapsible: false
                        },
                        {
                            text: '随笔 - 常用DOS命令',
                            link: '/md/more/essay/essay_003_dos_command.md',
                            collapsible: false
                        },
                        {
                            text: '随笔 - windows下安装NodePad++',
                            link: '/md/more/essay/essay_004_nodepad.md',
                            collapsible: false
                        }
                    ]
                },
                {
                    text: '实操系列',
                    collapsible: true,
                    children: [
                        {
                            text: 'Window OS系统下Markdown转word的设置',
                            link: '/md/more/real-operation/ro_001.md',
                            collapsible: false
                        },
                        {
                            text: 'Windows系统下Vmware Workstation中安装及使用CentOS7系统超详细图文教程',
                            link: '/md/more/real-operation/ro_002.md',
                            collapsible: false
                        },
                        {
                            text: 'Windows11系统下彻底卸载Vmware Workstation虚拟机超详细图文教程',
                            link: '/md/more/real-operation/ro_003.md',
                            collapsible: false
                        }
                    ]
                },
            ]
        },
    ]
}  
