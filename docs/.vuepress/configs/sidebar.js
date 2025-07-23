import { interviewSidebar } from './sidebar_interview.ts'
import { javaSidebar } from './sidebar_java.ts'
import { goSidebar } from './sidebar_go.ts'
import { reactiveSidebar } from './sidebar_reactive.ts'
import { questionSidebar } from './sidebar_question.ts'
import { moreSidebar } from './sidebar_more.ts'

export const sidebar = {
    '/md/note/interview/': interviewSidebar,
    '/md/note/java/': javaSidebar,
    '/md/note/go/': goSidebar,
    '/md/note/reactive/': reactiveSidebar,
    '/md/question/': questionSidebar,
    '/md/more/': moreSidebar
}

