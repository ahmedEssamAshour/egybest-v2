/**on terminal do this to compile sass
 * 1- npm install gulp --save-dev
 * 2- npm install gulp-sass --save-dev
 * 3- call gulp sassToCss
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
const { dest } = require("vinyl-fs");

gulp.task("sassToCss", async function() {
        //pipe() لما تخلص التاسك ادخل نفذ حاجة
        return gulp.src('sass/style.scss').pipe(sass()).pipe(gulp.dest('destination'))
            //src() => this fun will know what is the src and compile it
            //exmp: i told the compile the make the src this 'sass/style.scss'
            //sass()=> حيشوف مين السورس ويحوله this is src 'sass/style.scss'
            //dest() => finly put it on des folder


    })
    /**
     * terminal بدل ما كل شوية تنادي الدالة في ال
     * watch حعمل تاسك
     *  */
gulp.task('filewatcher', function() {
    //  علي فايل معين حصل فيه تغير نادي الدالة watch هنا 
    //gulp filewatcher
    gulp.watch('**/**.scss', gulp.series('sassToCss'))
})