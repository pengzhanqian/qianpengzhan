export const sidebar = 
{
    '/md/java/':[
        {
            text: '初识JAVA',
            collapsible: true,
            children: [
                {
                    text: '初识JAVA - Java简史',
                    link: '/md/java/first/first_001.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - Java体系结构',
                    link: '/md/java/first/first_002.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - Java特性和优势',
                    link: '/md/java/first/first_003.md',
                    collapsible: false
                },
                {
                    text: '初识JAVA - 跨平台性的原理',
                    link: '/md/java/first/first_004.md',
                    collapsible: false
                }, 
                {
                    text: '初识JAVA - JDK的下载以及环境配置',
                    link: '/md/java/first/first_005.md',
                    collapsible: false
                }, 
                {
                    text: '初识JAVA - Hello World',
                    link: '/md/java/first/first_006.md',
                    collapsible: false
                }, 
                {
                    text: '初识JAVA - IDE工具 - Intellj idea',
                    link: '/md/java/first/first_007.md',
                    collapsible: false
                }
            ]
        },
        {
            text: 'JAVA基础知识',
            collapsible: true,
            children: [
                {
                    text: 'JAVA基础知识 - 学习注释',
                    link: '/md/java/basic/basic_001.md',
                    collapsible: false
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
