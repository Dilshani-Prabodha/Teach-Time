package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddTask {
    private Long taskId;
    private Integer period;
    private LocalDate date;
    private String grade;
    private String task;
    private Boolean check = false;
    private Integer teacherId;
}
