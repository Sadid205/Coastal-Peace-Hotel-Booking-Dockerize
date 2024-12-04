# Generated by Django 5.1.1 on 2024-11-01 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0035_alter_bestroom_rating_alter_hotel_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bestroom',
            name='rating',
            field=models.CharField(blank=True, choices=[('🌟', '🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟'), ('🌟🌟', '🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟', '🌟🌟🌟🌟')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='rating',
            field=models.CharField(choices=[('🌟', '🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟'), ('🌟🌟', '🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟', '🌟🌟🌟🌟')], max_length=10),
        ),
    ]
