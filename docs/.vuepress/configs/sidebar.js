import { interviewSidebar } from './sidebars/sidebar_interview.ts'
import { javaSidebar } from './sidebars/sidebar_java.ts'
import { goSidebar } from './sidebars/sidebar_go.ts'
import { reactiveSidebar } from './sidebars/sidebar_reactive.ts'
import { questionSidebar } from './sidebars/sidebar_question.ts'
import { moreSidebar } from './sidebars/sidebar_more.ts'
import { algorithmSidebar } from './sidebars/sidebar_algorithm.ts'

export const sidebar = {
    '/md/note/interview/': interviewSidebar,
    '/md/note/java/': javaSidebar,
    '/md/note/go/': goSidebar,
    '/md/note/reactive/': reactiveSidebar,
    '/md/question/': questionSidebar,
    '/md/more/': moreSidebar,
    '/md/algorithm/': algorithmSidebar
}

