# Generated by Django 5.1.1 on 2024-11-01 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0032_alter_booking_booking_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='booking_status',
            field=models.CharField(choices=[('Confirmed', 'Confirmed'), ('Checked-in', 'Checked-in'), ('Checked-out', 'Checked-out'), ('Cancelled', 'Cancelled'), ('Pending', 'Pending')], default='Pending', max_length=20),
        ),
    ]
