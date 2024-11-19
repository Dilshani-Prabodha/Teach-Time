package edu.icet.controller;

import edu.icet.dto.Teacher;
import edu.icet.dto.TimeTable;
import edu.icet.entity.TimeTableCompositePkEntity;
import edu.icet.service.TimeTableService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/time-table")
@RequiredArgsConstructor
@CrossOrigin
public class TimeTableController {
    @Autowired
    private final TimeTableService timeTableService;
    @GetMapping("/get-all-grades")
    public List<TimeTable> getTeacher(){
        return timeTableService.getAll();
    }
    @PostMapping("/add-grade")
    @ResponseStatus(HttpStatus.CREATED)
    public void addGrade(@RequestBody TimeTable timeTable){
        timeTableService.addGradesToTimeTbl(timeTable);
    }

//    @GetMapping("/search-by-timetableId/{teacherId}/{day}/{period}")
//    public TimeTable getGradeById(@PathVariable TimeTableCompositePkEntity timeTblId){
//        return timeTableService.searchGradeById(timeTblId);
//    }

    @GetMapping("/search-by-timetableId/{teacherId}/{day}/{period}")
    public TimeTable getGradeById(
            @PathVariable Integer teacherId,
            @PathVariable Integer day,
            @PathVariable Integer period) {
        TimeTableCompositePkEntity timeTblId = new TimeTableCompositePkEntity(teacherId, day, period);
        return timeTableService.searchGradeById(timeTblId);
    }


    @DeleteMapping("/delete-by-timetableId/{timetableId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteGrade(@PathVariable TimeTableCompositePkEntity timeTblId){
        timeTableService.deleteGradeById(timeTblId);
    }

    @PutMapping("/update-timetable")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateTimeTable(@RequestBody TimeTable timeTable){
        timeTableService.UpdateGradeById(timeTable);
    }
}


