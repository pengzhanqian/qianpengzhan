export const sidebar = 
{
    '/md/java/':[
        {
            text: 'Java基础',
            collapsible: true,
            children: [
                {
                    text: 'JAVA基础 - Java简史',
                    link: '/md/java/basic/basic_001.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础 - Java体系结构',
                    link: '/md/java/basic/basic_002.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础 - Java特性和优势',
                    link: '/md/java/basic/basic_003.md',
                    collapsible: false
                },
                {
                    text: 'JAVA基础 - 跨平台性的原理',
                    link: '/md/java/basic/basic_004.md',
                    collapsible: false
                }
            ]
        }
    ],
    '/md/more/': [
        {
            text: '更多',
            collapsible: false,
            children: [
                {
                    text: '阿里',
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
                    children: [
                        {
                            text: '随笔 - Linux命令',
                            link: '/md/more/essay/essay_001_linux_command.md',
                            collapsible: true
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
                        }
                    ]
                },
                {
                    text: '实操系列',
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
