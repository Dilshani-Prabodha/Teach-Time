package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Teacher {
    private Integer teacherId;
    private String teacherName;
    private String schoolName;
    private String subject;
    private String email;
    private String contactNumber;
    private String userName;
    private String password;

}
